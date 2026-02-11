import type { FeaturedApp as FeaturedAppType } from "@/types/portfolio";
import { Badge } from '@/components/ui/badge';

interface FeaturedAppProps {
    app: FeaturedAppType;
}

export default function FeaturedApp({ app }: FeaturedAppProps) {
    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Featured Project
                </h2>

                <div className="glass p-8 md:p-12 rounded-2xl space-y-8">
                    {/* Header */}
                    <div className="flex items-start gap-6">
                        <div className="text-6xl">{app.icon.includes('fa') ? '🚀' : app.icon}</div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-2">{app.name}</h3>
                            <p className="text-muted-foreground text-lg">{app.tagline}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {app.rating && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{app.rating}</div>
                                <div className="text-sm text-muted-foreground">Rating</div>
                            </div>
                        )}
                        {app.testCases && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{app.testCases}</div>
                                <div className="text-sm text-muted-foreground">Test Cases</div>
                            </div>
                        )}
                        {app.coverage && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{app.coverage}</div>
                                <div className="text-sm text-muted-foreground">Coverage</div>
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {app.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="px-4 py-2">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">{app.description}</p>
                </div>
            </div>
        </section>
    );
}
