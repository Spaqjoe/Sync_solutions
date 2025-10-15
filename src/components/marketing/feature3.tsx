"use client"

import {
  BoldIcon,
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { SectionBadge } from "../ui/section-bade";
import GlareHover from "../ui/GlareHover";

const Feature3 = () => {
  return (
    <section className="py-32">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-15">
        <SectionBadge title="Features" />
      </div>
      <div className="container mt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
            Why Choose SyncSolutions.
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(200px,1fr)]">
            <Card className="h-full w-full lg:col-span-2">
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <Code className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Web Development</h2>
                  <p className="text-muted-foreground leading-snug">
                    Display your company's services and strengths visually.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/images/web-dev.png"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card className="h-full w-full">
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <Play className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">AI and Automations</h2>
                  <p className="text-muted-foreground leading-snug">
                    Seamless automated workflow to increase productivity.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/images/ai.png"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card className="h-full w-full">
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <GitBranch className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">CRM Setup</h2>
                  <p className="text-muted-foreground leading-snug">
                    Plan and visualize your sales strategy.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/images/CRM.jpg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card className="h-full w-full lg:col-span-2">
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <List className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Lead Generation</h2>
                  <p className="text-muted-foreground leading-snug">
                    Scale your business up to <b>5X</b> more.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/images/lms.png"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
