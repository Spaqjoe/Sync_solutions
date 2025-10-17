"use client"

import Image from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconChartLine,
    IconCode,
    IconGitFork,
    IconRobot,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
    return (

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>

    );
}
const Skeleton = ({
    image,
    alt,
    sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 100vw",
    className = "h-44 sm:h-52 lg:h-56",
}: { image: string; alt: string; sizes?: string; className?: string }) => (
    <div
        className={`relative w-full overflow-hidden rounded-xl bg-neutral-900/60 ${className}`}
    >
        <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes}
        />
    </div>
);
const items = [

    {
        title: "Web Development",
        description: "Display your company&apos;s services and strengths visually.",
        header: (
            <Skeleton
                image="/images/web.png"
                alt="Web application preview"
                sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 50vw, (min-width: 768px) 70vw, 100vw"
                className="h-40"
            />
        ),
        className: "md:col-span-2",
        icon: <IconCode className="h-5 w-5 text-white/80" />,
    },

    {
        title: "AI and Automation",
        description: "Seamless automations that saves time and increases productivity.",
        header: (
            <Skeleton
                image="/images/n8n.png"
                alt="Automation workflow diagram"
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, (min-width: 768px) 45vw, 100vw"
                className="h-40"
            />
        ),
        className: "md:col-span-1",
        icon: <IconGitFork className="h-5 w-5 text-white/80" />,
    },
    {
        title: "Lead Generation",
        description: "Get the best lead magnet tailored for you.",
        header: (
            <Skeleton
                image="/images/lms.png"
                alt="User interface mockup"
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, (min-width: 768px) 45vw, 100vw"
                className="h-40"
            />
        ),
        className: "md:col-span-1",
        icon: <IconRobot className="h-5 w-5 text-white/80" />,
    },
    {
        title: "CRM Integration",
        description:
            "Plan and visualize your sales strategy.",
        header: (
            <Skeleton
                image="/images/crm.jpg"
                alt="Analytics dashboard"
                sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 50vw, (min-width: 768px) 70vw, 100vw"
                className="h-40"
            />
        ),
        className: "md:col-span-2",
        icon: <IconChartLine className="h-5 w-5 text-white/80" />,
    },
];
