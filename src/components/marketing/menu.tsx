"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";
import Logo from "../global/logo";

interface ItemProps {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

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
            <NavigationMenuList className="gap-5">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Logo className="h-10 w-36" />
                                        <div className="my-2 text-lg font-normal">
                                            SyncSolutions
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your ultimate solution for your business.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="CRM Integration" href="/features/content-calendar" icon={<CalendarRangeIcon className="w-5 h-5" />}>
                                Plan and visualize your sales strategy.
                            </Item>
                            <Item title="Website Integration" href="/features/hashtag-manager" icon={<HashIcon className="w-5 h-5" />}>
                                Display your company&apos;s services and strengths visually.
                            </Item>
                            <Item title="Portal System" href="/features/competitor-analysis" icon={<UsersIcon className="w-5 h-5" />}>
                                <i>Coming Soon</i>
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#perks" legacyBehavior passHref>
                        <NavigationMenuLink
                            className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none"
                            onClick={(event) => handleAnchorClick(event, "perks")}
                        >
                            Perks
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                            <Item title="Blog" href="/resources/blog" icon={<Newspaper className="w-5 h-5" />}>
                                Read our latest articles and updates.
                            </Item>
                            <Item title="Support" href="/resources/support" icon={<CircleHelp className="w-5 h-5" />}>
                                Get help with any issues you may have.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: ItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
