import Link from "next/link";
import { Coffee, Menu, Search, User } from "lucide-react";

// UI Forced Update - 2026-03-05
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-coffee-brown/5 py-5">
            <div className="container mx-auto px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3 group animate-in fade-in duration-700">
                    <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-white shadow-gold-glow group-hover:rotate-12 transition-transform">
                        <Coffee size={20} className="fill-current" />
                    </div>
                    <span className="text-2xl font-serif text-coffee-brown font-black tracking-tight leading-none">
                        OurCoffee<span className="text-gold italic">Stops</span>
                    </span>
                </Link>

                <div className="hidden lg:flex space-x-12 items-center text-[10px] font-black text-coffee-brown uppercase tracking-[0.25em]">
                    <Link href="/best-coffee-machines" className="hover:text-gold transition-all relative group py-2">
                        <span>Best Machines</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/espresso-machines" className="hover:text-gold transition-all relative group py-2">
                        <span>Espresso</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/comparison" className="hover:text-gold transition-all relative group py-2">
                        <span>Compare</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/#blog" className="hover:text-gold transition-all relative group py-2">
                        <span>Editorial</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden sm:flex items-center space-x-4 border-r border-[#E9ECEF] pr-6">
                        <button className="text-coffee-brown/40 hover:text-gold transition-colors">
                            <Search size={18} />
                        </button>
                        <Link href="/admin" className="text-coffee-brown/40 hover:text-gold transition-colors">
                            <User size={18} />
                        </Link>
                    </div>

                    <Link
                        href="/best-coffee-machines"
                        className="gold-button px-8 py-3.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-gold-glow hidden md:block"
                    >
                        GUIDE 2026
                    </Link>

                    <button className="lg:hidden p-2 text-coffee-brown">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
