import type { Service } from "@/types/portfolio";

interface ServicesProps {
    services: Service[];
}

export default function Services({ services }: ServicesProps) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-xl hover:scale-105 transition-all text-center space-y-4"
                        >
                            <div className="text-5xl mx-auto">
                                {service.icon.includes('fa') ? '💼' : service.icon}
                            </div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
