import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = (props: MetadataProps = {}): Metadata => {
    const {
        title,
        description = "Up-scale, Integrate and Optimize your business strategy. Grow your company and brand with ease.",
        image = "/thumbnail.png",
        icons = [
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/icons/favicon-32x32.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                url: "/icons/favicon-16x16.png"
            },
        ],
        noIndex = false,
        keywords = [
            "AI and Automations",
            "CRM integration",
            "graphic design",
            "lead managment",
            "web development",
        ],
        author,
        twitterHandle = "@yourtwitterhandle",
        type = "website",
        locale = "en_US",
        alternates = {},
        publishedTime,
        modifiedTime
    } = props;

    const appName = process.env.NEXT_PUBLIC_APP_NAME || "Sync Solutions";
    const resolvedAuthor = author ?? process.env.NEXT_PUBLIC_AUTHOR_NAME ?? appName;
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000");
    const resolvedTitle = title ?? `${appName} - Smart Business Scaling System`;
    const imageUrl = image ? new URL(image, metadataBase).toString() : null;

    return {
        metadataBase,
        title: {
            template: `%s | ${appName}`,
            default: resolvedTitle
        },
        description,
        keywords,
        authors: [{ name: resolvedAuthor }],
        creator: resolvedAuthor,
        publisher: appName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,

        // OpenGraph
        openGraph: {
            type,
            siteName: appName,
            title: resolvedTitle,
            description,
            ...(imageUrl && {
                images: [{
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }]
            }),
            locale,
            alternateLocale: Object.keys(alternates),
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime })
        },

        // Twitter
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            site: twitterHandle,
            creator: twitterHandle,
            title: resolvedTitle,
            description,
            ...(imageUrl && { images: [imageUrl] })
        },

        // Robots
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
        },
    };
};
