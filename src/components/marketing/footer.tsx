import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Logo from "../global/logo";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME || "Sync Solutions";

    return (
        <footer id="footer" className="w-full py-10 relative scroll-mt-32">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-center pb-20 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48 ">
                        <div className="flex items-center gap-2">
                            <Logo className="h-6 w-24" aria-hidden />
                            <span className="text-xl font-medium color-#7c47ed">
                                {appName}
                            </span>
                        </div>
                        <p className="text-base max-w mt-4">
                            Empower your business with our AI tools.
                        </p>
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} {appName}. All rights reserved.
                    </p>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
