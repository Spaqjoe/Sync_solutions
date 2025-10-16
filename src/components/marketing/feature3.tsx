"use client"

import Image from "next/image";
import { Code, GitBranch, List, Play, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { SectionBadge } from "../ui/section-bade";
import GlareHover from "../ui/GlareHover";

type CardId = "card1" | "card2" | "card3" | "card4";

interface FeatureCard {
  id: CardId;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const cards: FeatureCard[] = [
  {
    id: "card1",
    icon: Code,
    title: "Web Development",
    description: "Display your company&apos;s services and strengths visually.",
    image:
      "/images/web.png",
  },
  {
    id: "card2",
    icon: Play,
    title: "AI and Automation",
    description: "Seamless automations that saves time and increases productivity.",
    image:
      "/images/n8n.png",
  },
  {
    id: "card3",
    icon: GitBranch,
    title: "CRM Integration",
    description: "Plan and visualize your sales strategy.",
    image:
      "/images/crm.jpg",
  },
  {
    id: "card4",
    icon: List,
    title: "Lead Generation",
    description: "Get the best lead magnet tailored for you.",
    image:
      "/images/lms.png",
  },
];

const layoutClasses: Record<CardId, string> = {
  card1: "lg:[grid-area:card1] lg:aspect-[3/2]",
  card2: "lg:[grid-area:card2] lg:aspect-[3/5] lg:max-h-full",
  card3: "lg:[grid-area:card3] lg:aspect-square",
  card4: "lg:[grid-area:card4] lg:aspect-[7/3]",
};

const Feature3 = () => {
  return (
    <section className="py-32">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-15">
        <SectionBadge title="Features" />
      </div>
      <div className="container mt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
            This is where your feature goes
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(0,1fr)] lg:[grid-template-areas:'card1_card1_card1_card2'_'card3_card4_card4_card2']">
            {cards.map(({ id, icon: Icon, title, description, image }) => (
              <div
                key={id}
                className={`flex h-full w-full flex-col sm:aspect-[4/3] lg:max-h-[320px] ${layoutClasses[id]}`}
              >
                <Card className="h-full overflow-hidden">
                  <GlareHover
                    glareColor="#723eed"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1250}
                    playOnce={false}
                    className="h-full"
                  >
                    <CardHeader className="pb-1">
                      <Icon className="size-4" strokeWidth={1} />
                    </CardHeader>
                    <CardContent className="text-left">
                      <h2 className="mb-1 text-lg font-semibold">{title}</h2>
                      <p className="text-muted-foreground leading-snug">
                        {description}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto h-32 sm:h-40 lg:h-44 overflow-hidden justify-end pb-0 pr-0">
                      <div className="relative h-full w-full">
                        <Image
                          src={image}
                          alt={title}
                          width={640}
                          height={360}
                          className="size-full object-cover object-center"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </CardFooter>
                  </GlareHover>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
