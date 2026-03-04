"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ShoppingBag,
    FileText,
    Search,
    Settings,
    ExternalLink,
    Coffee
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Products", href: "/admin/products", icon: ShoppingBag },
        { name: "Blogs", href: "/admin/blogs", icon: FileText },
        { name: "Scraper", href: "/admin/scraper", icon: Search },
    ];

    return (
        <div className="flex min-h-screen bg-[#0f0f0f] text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#141414] hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-8">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                            <Coffee className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold font-serif tracking-tight">Admin<span className="text-gold">CP</span></span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                        ? "bg-gold text-white shadow-gold-glow"
                                        : "text-white/50 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "group-hover:text-gold"}`} />
                                <span className="font-medium tracking-wide">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 mt-auto">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/10">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-2">System Status</p>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-medium text-white/70">Scraper Online</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col min-h-screen relative">
                {/* Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0f0f0f]/80 backdrop-blur-xl sticky top-0 z-10">
                    <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
                        {navItems.find(i => i.href === pathname)?.name || "Management"}
                    </h1>
                    <div className="flex items-center space-x-6">
                        <Link href="/" target="_blank" className="flex items-center space-x-2 text-xs font-bold text-white/60 hover:text-gold transition-colors">
                            <span className="tracking-widest underline decoration-gold/30">VIEW STORE</span>
                            <ExternalLink size={14} />
                        </Link>
                        <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-white/5 flex items-center justify-center">
                            <span className="text-xs font-bold text-gold">AK</span>
                        </div>
                    </div>
                </header>

                <div className="p-8 flex-grow">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
