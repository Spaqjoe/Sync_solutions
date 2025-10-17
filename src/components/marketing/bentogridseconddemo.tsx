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
const Skeleton = ({ image, alt }: { image: string; alt: string }) => (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-black">
        <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
        />
    </div>
);
const items = [

    {
        title: "Web Development",
        description: "Display your company&apos;s services and strengths visually.",
        header: <Skeleton image="/images/web.png" alt="Web application preview" />,
        className: "md:col-span-2",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "AI and Automation",
        description: "Seamless automations that saves time and increases productivity.",
        header: <Skeleton image="/images/n8n.png" alt="Automation workflow diagram" />,
        className: "md:col-span-1",
        icon: <IconGitFork className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Lead Generation",
        description: "Get the best lead magnet tailored for you.",
        header: <Skeleton image="/images/lms.png" alt="User interface mockup" />,
        className: "md:col-span-1",
        icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "CRM Integration",
        description:
            "Plan and visualize your sales strategy.",
        header: <Skeleton image="/images/crm.jpg" alt="Analytics dashboard" />,
        className: "md:col-span-2",
        icon: <IconChartLine className="h-4 w-4 text-neutral-500" />,
    },
];
