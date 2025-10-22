"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

    const value = useMemo(
        () => ({
            openModal: () => setIsOpen(true),
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
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl gap-6 border border-foreground/10 bg-background/95 p-8 backdrop-blur-md">
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
                            <Input id="phone" type="tel" name="phone" placeholder="+1 (555) 444-0000" />
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
