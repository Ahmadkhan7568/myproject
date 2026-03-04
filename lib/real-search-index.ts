export interface ScrapedProduct {
    name: string;
    price: string;
    image: string;
    rating: string;
    type: string;
    latestPriceLink: string;
    description: string;
    source: string;
}

export const realProductIndex: ScrapedProduct[] = [
    // ESPRESSO MACHINES
    {
        name: "Breville Barista Express Impress",
        price: "$899.95",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53a?w=800",
        rating: "4.8",
        type: "Espresso Machine",
        latestPriceLink: "https://www.amazon.com/dp/B0B1N59G4S",
        description: "Intelligent dosing system with assisted tamping for the perfect puck.",
        source: "amazon.com"
    },
    {
        name: "Breville Bambino Plus",
        price: "$499.95",
        image: "https://images.unsplash.com/photo-1544787210-282743207b5b?w=800",
        rating: "4.7",
        type: "Espresso Machine",
        latestPriceLink: "https://www.amazon.com/dp/B07FKG6PGV",
        description: "Compact high-performance machine with automatic milk texturing.",
        source: "amazon.com"
    },
    {
        name: "Philips 3200 Series LatteGo",
        price: "$799.00",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        rating: "4.5",
        type: "Super-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B07VFY44CS",
        description: "One-touch cappuccino and latte with the easiest to clean milk system.",
        source: "amazon.com"
    },
    {
        name: "De'Longhi Magnifica Evo",
        price: "$799.95",
        image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=800",
        rating: "4.6",
        type: "Super-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B09BBW86N8",
        description: "Professional milk frothing system with 7 one-touch recipes.",
        source: "walmart.com"
    },
    {
        name: "Ninja Luxe Café Pro Series",
        price: "$499.99",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
        rating: "4.9",
        type: "All-in-One",
        latestPriceLink: "https://www.amazon.com/dp/B0C3MQHBNH",
        description: "4-in-1 espresso, drip coffee, and cold brew system with Barista Assist.",
        source: "amazon.com"
    },
    {
        name: "Rancilio Silvia Pro X",
        price: "$1,875.00",
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800",
        rating: "4.9",
        type: "Dual Boiler",
        latestPriceLink: "https://www.amazon.com/dp/B09M7N6P6W",
        description: "Dual boiler precision with PID temperature control and soft infusion.",
        source: "amazon.com"
    },
    {
        name: "De'Longhi Stilosa",
        price: "$99.95",
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800",
        rating: "4.3",
        type: "Manual Espresso",
        latestPriceLink: "https://www.amazon.com/dp/B08C96D692",
        description: "Budget-friendly 15-bar pump espresso machine for beginners.",
        source: "walmart.com"
    },
    {
        name: "Gaggia Classic Pro",
        price: "$449.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
        rating: "4.6",
        type: "Semi-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B07RQ3NL76",
        description: "The gold standard for home espresso, built to last a lifetime.",
        source: "amazon.com"
    },

    // GRINDERS
    {
        name: "Baratza Encore ESP",
        price: "$199.95",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
        rating: "4.8",
        type: "Burr Grinder",
        latestPriceLink: "https://www.amazon.com/dp/B0BS6V2CPW",
        description: "Redesigned with espresso-focused adjustment for the perfect grind.",
        source: "amazon.com"
    },
    {
        name: "Fellow Opus Conical Burr Grinder",
        price: "$195.00",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800",
        rating: "4.7",
        type: "All-Purpose Grinder",
        latestPriceLink: "https://www.amazon.com/dp/B0BSM1W5D7",
        description: "Ultra-quiet multipurpose grinder with high-torque motor.",
        source: "amazon.com"
    },
    {
        name: "OXO Conical Burr Grinder",
        price: "$99.95",
        image: "https://images.unsplash.com/photo-1620052581237-5d36667be337?w=800",
        rating: "4.6",
        type: "Conical Burr",
        latestPriceLink: "https://www.amazon.com/dp/B07CSKGLN4",
        description: "Consistently uniform grounds for French press to pour-over.",
        source: "walmart.com"
    },
    {
        name: "Breville Smart Grinder Pro",
        price: "$199.95",
        image: "https://images.unsplash.com/photo-1611171711791-b34ec40d9976?w=800",
        rating: "4.7",
        type: "Smart Grinder",
        latestPriceLink: "https://www.amazon.com/dp/B00OXGXW8O",
        description: "60 unique settings with Dosing IQ for precise grinding.",
        source: "amazon.com"
    },

    // ACCESSORIES
    {
        name: "Ember Temperature Control Mug 2",
        price: "$129.95",
        image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=800",
        rating: "4.8",
        type: "Smart Mug",
        latestPriceLink: "https://www.amazon.com/dp/B07X649J3X",
        description: "Keep your coffee at the perfect drinking temperature for 80 mins.",
        source: "amazon.com"
    },
    {
        name: "Chemex Pour-Over Glass Coffeemaker",
        price: "$46.95",
        image: "https://images.unsplash.com/photo-1544666107-744053413812?w=800",
        rating: "4.9",
        type: "Pour-Over",
        latestPriceLink: "https://www.amazon.com/dp/B0000CFCCW",
        description: "The iconic design for professional-grade pour-over coffee.",
        source: "amazon.com"
    },
    {
        name: "Comandante C40 MK4 Nitro Blade",
        price: "$350.00",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        rating: "5.0",
        type: "Manual Grinder",
        latestPriceLink: "https://www.amazon.com/dp/B09DTNPR9X",
        description: "The absolute peak of manual grinding technology.",
        source: "amazon.com"
    }
];
