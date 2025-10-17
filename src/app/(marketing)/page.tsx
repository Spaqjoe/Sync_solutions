import { Background, Companies, Connect, Container, CTA, Hero, Perks, Reviews, Wrapper } from "@/components";
import { Faq1 } from "@/components/marketing/faq1";
import { Contact7 } from "@/components/marketing/contact7";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGridSecondDemo } from "@/components/marketing/features2";

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                <Connect />
                <BentoGridSecondDemo />
                <Perks />
                <Faq1 />
                <CTA />
                <Contact7 />
            </Wrapper>
        </Background>
    )
};

export default HomePage
