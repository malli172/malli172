import type { Achievement } from "@/types/portfolio";

interface AchievementsProps {
    achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, idx) => (
                        <div key={idx} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform space-y-4">
                            <div className="text-5xl mx-auto">
                                {achievement.icon.includes('fa') ? '🏆' : achievement.icon}
                            </div>
                            <h3 className="text-lg font-bold">{achievement.title}</h3>
                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
