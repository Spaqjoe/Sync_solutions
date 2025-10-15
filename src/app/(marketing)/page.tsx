import { Background, Companies, Connect, Container, CTA, Hero, Perks, Reviews, Wrapper } from "@/components";
import { Faq1 } from "@/components/marketing/faq1";
import { Contact7 } from "@/components/marketing/contact7";
import { Feature3 } from "@/components/marketing/feature3";
import { Spotlight } from "@/components/ui/spotlight";

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
                <Container className="py-8 lg:py-20">
                    <Companies />
                </Container>
                <Feature3 />
                <Perks />
                <Reviews />
                <Faq1 />
                <Contact7 />
                <CTA />
            </Wrapper>
        </Background>
    )
};

export default HomePage
