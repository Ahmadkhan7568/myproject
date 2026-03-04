import { Coffee, ShieldCheck, Zap, Heart } from "lucide-react";

// UI Forced Update - 2026-03-05
const Features = () => {
    const features = [
        {
            title: "Expertly Vetted",
            description: "Every machine in our collection is personally tested by our team of master baristas for performance and durability.",
            icon: ShieldCheck,
            color: "text-gold"
        },
        {
            title: "Peak Freshness",
            description: "We provide detailed guides on bean selection and storage to ensure every cup is as fresh as the day it was roasted.",
            icon: Zap,
            color: "text-gold"
        },
        {
            title: "Precision Brewing",
            description: "Access our exclusive 'Barista Cheat Sheets' for every machine to master the art of the perfect extraction.",
            icon: Coffee,
            color: "text-gold"
        },
        {
            title: "Love for the Craft",
            description: "Join a community of 50,000+ coffee enthusiasts sharing recipes, tips, and aesthetic home cafe setups.",
            icon: Heart,
            color: "text-gold"
        },
    ];

    return (
        <section id="features" className="py-32 bg-white px-8 border-y border-coffee-brown/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="space-y-8 group hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 rounded-[24px] bg-[#FAF7F2] border border-gold/10 flex items-center justify-center shadow-premium group-hover:bg-gold group-hover:text-white group-hover:shadow-gold-glow transition-all duration-500">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-coffee-brown font-black leading-tight group-hover:text-gold transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-coffee-brown/40 text-sm leading-relaxed font-inter font-medium italic">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="h-[1px] w-12 bg-gold/20 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
