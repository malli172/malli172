import type { About as AboutType } from "@/types/portfolio";

interface AboutProps {
    about: AboutType;
}

export default function About({ about }: AboutProps) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    About Me
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                    <p className="leading-relaxed">{about.intro}</p>
                    <p className="leading-relaxed">{about.details}</p>
                </div>
            </div>
        </section>
    );
}
