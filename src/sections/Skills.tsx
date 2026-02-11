import type { SkillCategory } from "@/types/portfolio";
import { Progress } from '@/components/ui/progress';

interface SkillsProps {
    skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <div key={idx} className="glass p-6 rounded-xl space-y-6">
                            <h3 className="text-xl font-bold text-primary">{category.category}</h3>

                            <div className="space-y-4">
                                {category.items.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-sm text-primary">{skill.level}%</span>
                                        </div>
                                        {skill.tagline && (
                                            <p className="text-xs text-muted-foreground">{skill.tagline}</p>
                                        )}
                                        <Progress value={parseInt(skill.level)} className="h-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
