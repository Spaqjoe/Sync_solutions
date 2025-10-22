"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

interface MenuProps {
    onNavigate?: (targetId: string) => void;
}

const Menu = ({ onNavigate }: MenuProps) => {
    const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (!onNavigate) {
            return;
        }

        event.preventDefault();
        onNavigate(targetId);
    };

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
                {NAV_ITEMS.map(({ label, target }) => (
                    <NavigationMenuItem key={target}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={`#${target}`}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                onClick={(event) => handleAnchorClick(event, target)}
                            >
                                {label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Menu

const NAV_ITEMS: Array<{ label: string; target: string }> = [
    { label: "Offers", target: "offers" },
    { label: "Perks", target: "perks" },
    { label: "FAQs", target: "faqs" },
];
