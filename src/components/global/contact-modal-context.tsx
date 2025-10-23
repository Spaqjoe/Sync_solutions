"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { COUNTRY_OPTIONS, CountryOption } from "@/data/countries";

interface ContactModalContextValue {
    openModal: () => void;
    closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

interface ContactModalProviderProps {
    children: React.ReactNode;
}

export const ContactModalProvider = ({ children }: ContactModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string>("US");
    const [countryQuery, setCountryQuery] = useState("");

    const filteredCountries = useFilteredCountries(countryQuery);

    const value = useMemo(
        () => ({
            openModal: () => {
                setIsOpen(true);
            },
            closeModal: () => setIsOpen(false),
        }),
        [],
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsOpen(false);
    };

    return (
        <ContactModalContext.Provider value={value}>
            {children}
            <Dialog
                open={isOpen}
                onOpenChange={(open) => {
                    setIsOpen(open);
                    if (!open) {
                        setCountryQuery("");
                    }
                }}
            >
                <DialogContent className="w-[min(100vw-2rem,640px)] max-w-2xl gap-6 border border-foreground/10 bg-background/95 p-6 sm:p-8 backdrop-blur-md">
                    <DialogHeader>
                        <p className="text-sm font-medium text-primary">Get in Touch</p>
                        <DialogTitle className="text-2xl font-semibold tracking-tight">
                            Let’s chat, contact with us
                        </DialogTitle>
                        <DialogDescription className="text-base text-muted-foreground">
                            Have any questions or feedback? We&apos;re here to help. Send us a message and we&apos;ll get back to you
                            within 24 hours.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" name="firstName" placeholder="First name" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" name="lastName" placeholder="Last name" required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" name="email" placeholder="yourname@company.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Select
                                    value={selectedCountry}
                                    onValueChange={(value) => {
                                        setSelectedCountry(value);
                                        setCountryQuery("");
                                    }}
                                >
                                    <SelectTrigger className="sm:w-36" aria-label="Country code selector">
                                        <SelectValue>
                                            <CountrySelectValue code={selectedCountry} />
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[280px]">
                                        <div className="p-1">
                                        <Input
                                            value={countryQuery}
                                            onChange={(event) => setCountryQuery(event.target.value)}
                                            placeholder="Search country..."
                                            className="h-9"
                                        />
                                        </div>
                                        {filteredCountries.length ? (
                                            filteredCountries.map((country) => (
                                                <SelectItem key={country.iso} value={country.iso}>
                                                    <span className="flex items-center gap-2">
                                                        <span className="text-lg leading-none">{getFlagEmoji(country.iso)}</span>
                                                        <span className="flex-1 truncate text-sm">{country.name}</span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {country.code}
                                                        </span>
                                                    </span>
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <div className="px-3 py-2 text-sm text-muted-foreground">
                                                No country found
                                            </div>
                                        )}
                                    </SelectContent>
                                </Select>
                                <Input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    inputMode="tel"
                                    placeholder={`${getCountryDialCode(selectedCountry)} 555 444 0000`}
                                    className="flex-1"
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="Type your message" rows={4} />
                        </div>
                        <Button type="submit" size="lg" className="w-full sm:w-auto self-start px-8">
                            Send Message
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </ContactModalContext.Provider>
    );
};

export const useContactModal = () => {
    const context = useContext(ContactModalContext);

    if (!context) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }

    return context;
};

const filteredCountriesSelector = (query: string) => {
    if (!query) return COUNTRY_OPTIONS;
    const normalized = query.trim().toLowerCase();
    return COUNTRY_OPTIONS.filter((country) =>
        country.name.toLowerCase().includes(normalized) ||
        country.code.replace(/\s+/g, "").includes(normalized.replace(/\s+/g, "")) ||
        country.iso.toLowerCase().includes(normalized)
    );
};

const CountrySelectValue = ({ code }: { code: string }) => {
    const country = COUNTRY_OPTIONS.find((item) => item.iso === code) ?? COUNTRY_OPTIONS[0];

    return (
        <span className="flex items-center gap-2">
            <span className="text-lg leading-none">{getFlagEmoji(country.iso)}</span>
            <span className="text-sm text-muted-foreground">{country.code}</span>
        </span>
    );
};

const getCountryDialCode = (iso: string) => {
    const code = COUNTRY_OPTIONS.find((country) => country.iso === iso)?.code ?? "+1";
    return code.replace(/-/g, " ");
};

const getFlagEmoji = (iso: string) =>
    iso
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

const useFilteredCountries = (query: string): CountryOption[] =>
    useMemo(() => filteredCountriesSelector(query), [query]);
