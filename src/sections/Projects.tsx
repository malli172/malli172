import type { Testimonial } from "@/types/portfolio";

interface ProjectsProps {
    projects: Testimonial[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Projects & Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass p-8 rounded-xl hover:-translate-y-2 transition-transform border-t-4 border-primary">
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            {project.role && (
                                <p className="text-sm text-primary mb-4">{project.role}</p>
                            )}
                            <p className="text-muted-foreground leading-relaxed">{project.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
