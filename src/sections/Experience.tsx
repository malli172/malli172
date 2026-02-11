import type { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
    experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Professional Experience
                </h2>

                <div className="space-y-8">
                    {experience.map((exp, idx) => (
                        <div key={idx} className="glass p-8 rounded-xl border-l-4 border-primary hover:translate-x-2 transition-transform">
                            <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                            {exp.subtitle && (
                                <p className="text-primary mb-2">{exp.subtitle}</p>
                            )}
                            <p className="text-lg font-semibold mb-1">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-4">{exp.years}</p>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
