import { Coffee, ShieldCheck, Zap, Heart } from "lucide-react";

const Features = () => {
    const features = [
        {
            title: "Expertly Vetted",
            description: "Every machine in our collection is personally tested by our team of master baristas for performance and durability.",
            icon: ShieldCheck,
        },
        {
            title: "Peak Freshness",
            description: "We provide detailed guides on bean selection and storage to ensure every cup is as fresh as the day it was roasted.",
            icon: Zap,
        },
        {
            title: "Precision Brewing",
            description: "Access our exclusive 'Barista Cheat Sheets' for every machine to master the art of the perfect extraction.",
            icon: Coffee,
        },
        {
            title: "Love for the Craft",
            description: "Join a community of 50,000+ coffee enthusiasts sharing recipes, tips, and aesthetic home cafe setups.",
            icon: Heart,
        },
    ];

    return (
        <section id="features" className="py-24 bg-[#FAF7F2] px-6 border-y border-gold/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="space-y-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-gold/10 flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-serif text-coffee-brown font-bold leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-coffee-brown/60 text-sm leading-relaxed font-medium italic italic">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
