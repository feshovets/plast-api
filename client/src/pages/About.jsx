import Section from "../components/Section";
import { TextLink } from "../components/Link";

function About() {
    return (
        <div className='text-zinc-100 bg-zinc-950 min-h-screen'>
            <main className='lg:ml-60 px-4 pt-20 pb-12 md:px-16 md:pt-28 space-y-8 text-xl'>
                <h1 className='font-bold text-3xl'>About Plast API</h1>
                <Section id="project" title="What is this?">
                    <p>
                        The Plast API is a RESTful API made for fun and filled with actual data about hundreads of Plast units (<em>kureniʹ</em>).
                    </p>

                    <TextLink href={"/"}>Checkout documentation to get started</TextLink>{" "}.
                </Section>
                <Section id="plast" title="What is Plast?">
                    <p>
                        The Plast National Scout Organization of Ukraine is a Ukrainian scouting organization founded in 1911. It aims to foster the physical, intellectual, and spiritual development of young Ukrainians through various activities and programs based on the principles of scouting.
                    </p>
                    <p>
                        You can learn more about Plast on official website{" "}
                        <TextLink href={"https://plast.org.ua/"}>plast.org.ua</TextLink> or on{" "}
                        <TextLink href={"https://en.wikipedia.org/wiki/Plast#Organization"}>Wikipedia</TextLink>.
                    </p>
                </Section>
                <Section id="tech" title="Tech Stack">
                    <p>
                        The API is built using {" "}
                        <TextLink href={"https://nodejs.org/en"}>Node.js</TextLink> {" "}
                        with <TextLink href={"https://expressjs.com/"}>Express</TextLink>{" "}
                        framework for the backend. The client-side application is developed using{" "}
                        <TextLink href={"https://react.dev/"}>React</TextLink>{" "}.
                    </p>
                </Section>
                <Section id="who" title="Who made this?">
                    <p>
                        This project was created by <TextLink href={"https://github.com/feshovets"}>Feshovets</TextLink>
                    </p>
                </Section>
            </main>
        </div>
    )
}

export default About;