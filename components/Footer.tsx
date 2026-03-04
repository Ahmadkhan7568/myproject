import Link from "next/link";
import { Coffee, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

// UI Forced Update - 2026-03-05
const Footer = () => {
    return (
        <footer className="bg-matte-black text-white py-32 px-8 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    <div className="space-y-10">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center text-white shadow-gold-glow group-hover:rotate-12 transition-transform">
                                <Coffee size={24} className="fill-current" />
                            </div>
                            <span className="text-3xl font-serif font-black tracking-tight leading-none">
                                OurCoffee<span className="text-gold italic">Stops</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed font-inter font-medium italic">
                            Redefining the home brewing experience through meticulous analysis and a passion for the perfect extraction. Your journey to coffee excellence starts here.
                        </p>
                        <div className="flex space-x-6">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-500">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Curation</h4>
                        <ul className="space-y-6">
                            {["Best Machines", "Espresso Guides", "Grinder Reviews", "Accessories", "Comparison Tool"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-white/60 hover:text-gold transition-colors text-sm font-inter font-medium flex items-center space-x-2 group">
                                        <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all"></span>
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Institutional</h4>
                        <ul className="space-y-6">
                            {["About Us", "Editorial Policy", "Privacy Policy", "Terms of Service", "Affiliate Disclosure"].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-white/60 hover:text-gold transition-colors text-sm font-inter font-medium flex items-center space-x-2 group">
                                        <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all"></span>
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Contact</h4>
                        <ul className="space-y-8">
                            <li className="flex items-start space-x-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed font-inter font-medium italic">
                                    Suite 700, 123 Barista Avenue, Seattle, WA 98101
                                </p>
                            </li>
                            <li className="flex items-center space-x-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <p className="text-white/60 text-sm font-inter font-medium italic">hello@ourcoffeestops.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                    <p>© 2026 OurCoffeeStops. All rights Reserved.</p>
                    <div className="flex space-x-12">
                        <Link href="/admin" className="hover:text-gold transition-colors">Admin Access</Link>
                        <p>Powered by Excellence</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
