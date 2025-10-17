import { cn } from "@/functions/index";
import GlareHover from "./GlareHover";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <GlareHover
      glareColor="#723eed"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={1250}
      className={cn("group/bento row-span-1 h-full overflow-hidden rounded-xl", className)}
    >
      <div className="flex h-full flex-col justify-between space-y-4 rounded-xl border-[0.5px] border-[#525252] bg-neutral-900/85 p-5 text-neutral-50 shadow-input transition duration-200 hover:shadow-xl">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 font-sans font-semibold text-neutral-50">
            {title}
          </div>
          <div className="font-sans text-sm font-normal text-neutral-200">
            {description}
          </div>
        </div>
      </div>
    </GlareHover>
  );
};
