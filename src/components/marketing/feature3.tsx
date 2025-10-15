"use client"

import {
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
            This is where your feature goes
          </h1>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <Card>
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
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card>
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
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card>
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
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card>
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
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card>
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <WandSparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </GlareHover>
            </Card>
            <Card>
              <GlareHover
                glareColor="#723eed"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={1250}
                playOnce={false}
              >
                <CardHeader className="pb-1">
                  <Sparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="text-muted-foreground leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
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
