import type { Education as EducationType } from "@/types/portfolio";

interface EducationProps {
    education: EducationType[];
}

export default function Education({ education }: EducationProps) {
    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Education
                </h2>

                <div className="grid gap-6">
                    {education.map((edu, idx) => (
                        <div key={idx} className="glass p-8 rounded-xl hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                            <p className="text-lg text-primary mb-1">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground mb-2">{edu.years}</p>
                            {edu.score && (
                                <p className="text-sm font-medium">{edu.score}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
