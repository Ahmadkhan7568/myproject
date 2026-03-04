"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";

// UI Forced Update - 2026-03-05
const faqs = [
    {
        question: "What is the best coffee machine for home use in 2026?",
        answer: "The Breville Barista Touch Impress is currently our top recommendation. It combines professional-grade components with an intuitive touch screen and assisted tamping, making it perfect for both beginners and enthusiasts. It offers unparalleled consistency for home users looking for café-quality results."
    },
    {
        question: "Do I need a separate grinder for my coffee machine?",
        answer: "Many premium espresso machines, like the Breville Barista Express, include high-quality integrated grinders. However, if you are using a drip or pod machine, a separate burr grinder will significantly improve flavor consistency and freshness. A burr grinder is essential for a uniform grind size, which is key to great extraction."
    },
    {
        question: "Are automatic coffee machines better than manual ones?",
        answer: "It depends on your goals. Automatic machines offer consistency and speed at the touch of a button. Manual or semi-automatic machines require more skill but offer complete control over variables like water temperature and extraction time. For enthusiasts, manual machines provide a more rewarding 'craft' experience."
    },
    {
        question: "How often should I descale my coffee machine?",
        answer: "Regular descaling is vital for machine longevity. We recommend every 3-4 months, or more frequently (every 2 months) if you live in a hard water area, to prevent mineral buildup and maintain taste. Using filtered water can also extend the time between descaling cycles."
    },
    {
        question: "Should I buy an espresso machine or a drip coffee maker?",
        answer: "Choose drip if you prefer larger quantities of traditional coffee and a hands-off approach. Choose espresso if you enjoy concentrated shots, lattes, and cappuccinos, and don't mind a bit more daily maintenance and technique. Many modern machines now offer hybrid solutions too."
    }
];

const FAQ = () => {
    const [openIndex, setIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-white px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24 space-y-6">
                    <div className="inline-flex items-center space-x-3 text-gold">
                        <HelpCircle size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] font-inter">Knowledge Base</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-coffee-brown leading-[1.1]">Common <span className="text-gold italic">Inquiries</span></h2>
                    <p className="text-coffee-brown/50 max-w-xl mx-auto text-lg font-medium italic">Everything you need to know about starting your gourmet coffee journey.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={`group rounded-[40px] border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-[#FAF7F2] border-gold/20 shadow-premium' : 'bg-white border-coffee-brown/5 hover:border-gold/20'}`}>
                                <button
                                    onClick={() => setIndex(isOpen ? null : index)}
                                    className="w-full px-10 py-8 flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className={`font-serif text-xl md:text-2xl transition-colors duration-500 ${isOpen ? 'text-gold italic' : 'text-coffee-brown'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gold text-white rotate-180' : 'bg-[#FAF7F2] text-coffee-brown group-hover:bg-gold/10'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-10 pb-10 border-t border-gold/10 pt-8">
                                        <p className="text-coffee-brown/60 text-base leading-relaxed font-inter font-medium italic">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
