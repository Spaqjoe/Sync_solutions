import { cn } from "@/functions";
import Image from "next/image";
import { HTMLAttributes } from "react";

type LogoVariant = "default" | "dark";

interface LogoProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: LogoVariant;
    priority?: boolean;
}

const logoSourceMap: Record<LogoVariant, string> = {
    default: "/icons/logo.png",
    dark: "/icons/logo.png",
};

const Logo = ({
    className,
    variant = "default",
    priority = false,
    ...props
}: LogoProps) => {
    const src = logoSourceMap[variant] ?? logoSourceMap.default;

    return (
        <span
            className={cn(
                "relative inline-block h-8 w-28",
                className,
            )}
            {...props}
        >
            <Image
                src={src}
                alt="SyncSolutions logo"
                fill
                sizes="100%"
                priority={priority}
                className="object-contain"
            />
        </span>
    );
};

export default Logo;
