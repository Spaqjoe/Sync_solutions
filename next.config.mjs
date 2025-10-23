import fs from "fs";

process.env.BROWSERSLIST_IGNORE_OLD_DATA = process.env.BROWSERSLIST_IGNORE_OLD_DATA || "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    webpack: (config) => {
        if (config.snapshot?.managedPaths) {
            config.snapshot.managedPaths = config.snapshot.managedPaths.filter((path) => {
                try {
                    return fs.existsSync(path);
                } catch {
                    return false;
                }
            });
        }
        return config;
    },
};

export default nextConfig;
