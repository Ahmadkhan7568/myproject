"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is the best coffee machine for home use in 2026?",
        answer: "The Breville Barista Touch Impress is currently our top recommendation. it combines professional-grade components with an intuitive touch screen and assisted tamping, making it perfect for both beginners and enthusiasts."
    },
    {
        question: "Do I need a separate grinder for my coffee machine?",
        answer: "Many premium espresso machines, like the Breville Barista Express, include high-quality integrated grinders. However, if you are using a drip or pod machine, a separate burr grinder will significantly improve flavor consistency and freshness."
    },
    {
        question: "Are automatic coffee machines better than manual ones?",
        answer: "It depends on your goals. Automatic machines offer consistency and speed at the touch of a button. Manual or semi-automatic machines require more skill but offer complete control over variables like water temperature and extraction time."
    },
    {
        question: "How often should I descale my coffee machine?",
        answer: "Regular descaling is vital for machine longevity. We recommend every 3-4 months, or more frequently (every 2 months) if you live in a hard water area, to prevent mineral buildup and maintain taste."
    },
    {
        question: "Should I buy an espresso machine or a drip coffee maker?",
        answer: "Choose drip if you prefer larger quantities of traditional coffee and a hands-off approach. Choose espresso if you enjoy concentrated shots, lattes, and cappuccinos, and don't mind a bit more daily maintenance."
    },
    {
        question: "Are coffee pods and capsules environmentally friendly?",
        answer: "Many brands like Nespresso offer robust recycling programs. However, ground coffee is generally more eco-friendly. For pod users, look for reusable capsules or brands with clear recycling initiatives."
    },
    {
        question: "What is the 'Gold Cup Standard' in coffee brewing?",
        answer: "The SCA Gold Cup Standard is a technical certification for brewers that can maintain precise water temperature (197-205°F) and extraction times, such as the OXO Brew 8-Cup."
    },
    {
        question: "How long does a high-quality coffee machine last?",
        answer: "With proper maintenance and regular cleaning, a premium espresso machine can last 10-15 years. Drip machines typically last 5-10 years, depending on the build quality and usage frequency."
    },
    {
        question: "Can I use hot water from my coffee machine for other drinks?",
        answer: "Many modern machines, like the Keurig K-Elite, feature a 'Hot Water on Demand' setting which is perfect for tea, oatmeal, or instant soups without any coffee flavor transfer."
    },
    {
        question: "Does the price of a coffee machine guarantee better taste?",
        answer: "While price often correlates with build quality and thermal stability, the quality of your beans and the freshness of the grind are equally important. Even an affordable machine can outperform a premium one with better beans."
    }
];

const FAQ = () => {
    const [openIndex, setIndex] = useState<number | null>(0);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="card-luxury overflow-hidden border border-coffee-brown/5">
                    <button
                        onClick={() => setIndex(openIndex === index ? null : index)}
                        className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                    >
                        <span className="font-serif text-lg text-coffee-brown leading-tight">
                            {faq.question}
                        </span>
                        <span className={`text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    <div
                        className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 py-6 border-t border-coffee-brown/5' : 'max-h-0'
                            }`}
                    >
                        <p className="text-sm text-matte-black/70 leading-relaxed font-sans">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
