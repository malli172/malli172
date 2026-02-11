import type { PortfolioData } from "@/types/portfolio";
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface HeroProps {
    data: PortfolioData;
}

export default function Hero({ data }: HeroProps) {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center space-y-8 animate-fade-in-up">
                    {/* Greeting */}
                    <p className="text-primary text-lg font-medium">{data.greeting}</p>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                        {data.name}
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary/90">
                        {data.title}
                    </h2>

                    {/* Tagline */}
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {data.tagline}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 pt-4">
                        {data.socialLinks.linkedin && (
                            <a
                                href={data.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                        {data.socialLinks.github && (
                            <a
                                href={data.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        <a
                            href={`mailto:${data.email}`}
                            className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        {data.resumeFile && (
                            <a
                                href={data.resumeFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                            >
                                <FileText className="w-6 h-6" />
                            </a>
                        )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                        {Object.entries(data.stats).map(([key, value]) => (
                            <div key={key} className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                                <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
