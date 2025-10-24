"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SectionBadge } from "../ui/section-bade";
import Container from "../global/container";
import {
    IconCode,
    IconRobot,
    IconTrendingUp,
    IconGitBranch,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
    const appName = process.env.NEXT_PUBLIC_APP_NAME || "Sync Solutions";
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance slideshow every 4 seconds, pause on hover
    useEffect(() => {
        if (isHovered) return; // Don't advance when hovered

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleContentClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="offers" className="py-16 md:py-20 lg:py-24 scroll-mt-32">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Offers" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Create, integrate, and execute faster and smarter
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Transform your business strategy with {appName}&apos;s tailored offers, designed to optimize your workflow like never before.
                    </p>
                </div>
            </Container>

            <div className="max-w-7xl mx-auto mt-20 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Right Side - Content List (First on mobile) */}
                    <div className="space-y-4 order-2 lg:order-1">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleContentClick(index)}
                                className={`group cursor-pointer transition-all duration-500 ease-out ${index === activeIndex
                                    ? 'bg-primary/10 border-primary/30 scale-[1.02]'
                                    : 'bg-card/30 border-border/30 hover:bg-card/50 hover:border-border/50'
                                    } border rounded-xl p-4 sm:p-6 backdrop-blur-sm`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg transition-colors duration-300 ${index === activeIndex
                                        ? 'bg-primary/20 text-primary'
                                        : 'bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-heading font-semibold mb-2 transition-colors duration-300 ${index === activeIndex
                                            ? 'text-primary'
                                            : 'text-foreground group-hover:text-primary'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${index === activeIndex
                                            ? 'text-primary/80'
                                            : 'text-muted-foreground group-hover:text-foreground/80'
                                            }`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left Side - Slideshow (Second on mobile) */}
                    <div className="relative h-[400px] sm:h-[500px] order-1 lg:order-2">
                        <div
                            className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm h-full border-2 border-primary/20 shadow-2xl hover:shadow-3xl hover:border-primary/40 transition-all duration-500 ease-out"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {items.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 h-full group">
                                        <div className="relative w-full h-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0" />
                                            <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                                                        {item.icon}
                                                    </div>
                                                    <h3 className="text-xl font-heading font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-white/90 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Slide indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {items.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleContentClick(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? 'bg-primary w-6'
                                            : 'bg-white/40 hover:bg-white/60'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const items = [
    {
        title: "Web Development",
        description: "Display your company's services and strengths visually.",
        image: "/images/web.png",
        icon: <IconCode className="h-6 w-6" />,
    },
    {
        title: "AI and Automation",
        description: "Seamless automations that saves time and increases productivity.",
        image: "/images/n8n.png",
        icon: <IconRobot className="h-6 w-6" />,
    },
    {
        title: "Lead Generation",
        description: "Get the best lead magnet tailored for you.",
        image: "/images/lms.png",
        icon: <IconTrendingUp className="h-6 w-6" />,
    },
    {
        title: "CRM Integration",
        description: "Plan and visualize your sales strategy.",
        image: "/images/crm.jpg",
        icon: <IconGitBranch className="h-6 w-6" />,
    },
];
