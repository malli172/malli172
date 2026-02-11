import type { PortfolioData } from "@/types/portfolio";
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

interface ContactProps {
    data: PortfolioData;
}

export default function Contact({ data }: ContactProps) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Get In Touch
                </h2>

                <div className="glass p-12 rounded-xl space-y-8">
                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-primary" />
                            <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors">
                                {data.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-primary" />
                            <span>{data.location}</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 pt-8">
                        {data.socialLinks.linkedin && (
                            <a
                                href={data.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                            >
                                <Linkedin className="w-8 h-8" />
                            </a>
                        )}
                        {data.socialLinks.github && (
                            <a
                                href={data.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:-translate-y-1"
                            >
                                <Github className="w-8 h-8" />
                            </a>
                        )}
                    </div>

                    {/* Resume Download */}
                    {data.resumeFile && (
                        <div className="text-center pt-8">
                            <a
                                href={data.resumeFile}
                                download
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                            >
                                Download Resume
                            </a>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-12 text-muted-foreground">
                    <p>&copy; 2026 {data.name}. All rights reserved.</p>
                    <p className="text-sm mt-2">Built with React, TypeScript & Tailwind CSS</p>
                </div>
            </div>
        </section>
    );
}
