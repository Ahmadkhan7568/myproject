export interface ScrapedProduct {
    id?: string;
    name: string;
    price: string;
    image: string;
    rating: string;
    type: string;
    latestPriceLink: string;
    description: string;
    source: string;
    // Enhanced Technical Metrics
    milkFrother?: boolean;
    capacity?: string;
    bestFor?: string;
    easeOfUse?: string;
    // Advanced Technical Metrics
    pumpPressure?: string;
    grinder?: string;
    heatingSystem?: string;
    programmability?: string;
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
        source: "amazon.com",
        milkFrother: true,
        capacity: "2.0L",
        bestFor: "Precision Brewing",
        easeOfUse: "Guided",
        pumpPressure: "15 Bar",
        grinder: "Conical Burr",
        heatingSystem: "ThermoJet"
    },
    {
        name: "Breville Bambino Plus",
        price: "$499.95",
        image: "https://images.unsplash.com/photo-1544787210-282743207b5b?w=800",
        rating: "4.7",
        type: "Espresso Machine",
        latestPriceLink: "https://www.amazon.com/dp/B07FKG6PGV",
        description: "Compact high-performance machine with automatic milk texturing.",
        source: "amazon.com",
        milkFrother: true,
        capacity: "1.9L",
        bestFor: "Small Kitchens",
        easeOfUse: "Very Easy",
        pumpPressure: "15 Bar",
        grinder: "None",
        heatingSystem: "ThermoJet"
    },
    {
        name: "Philips 3200 Series LatteGo",
        price: "$799.00",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        rating: "4.5",
        type: "Super-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B07VFY44CS",
        description: "One-touch cappuccino and latte with the easiest to clean milk system.",
        source: "amazon.com",
        milkFrother: true,
        capacity: "1.8L",
        bestFor: "One-Touch Latte",
        easeOfUse: "Very Easy",
        pumpPressure: "15 Bar",
        grinder: "Ceramic Burr",
        heatingSystem: "Thermoblock"
    },
    {
        name: "De'Longhi Magnifica Evo",
        price: "$799.95",
        image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=800",
        rating: "4.6",
        type: "Super-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B09BBW86N8",
        description: "Professional milk frothing system with 7 one-touch recipes.",
        source: "walmart.com",
        milkFrother: true,
        capacity: "1.8L",
        bestFor: "Variety",
        easeOfUse: "Easy",
        pumpPressure: "15 Bar",
        grinder: "Steel Burr",
        heatingSystem: "Thermoblock"
    },
    {
        name: "Ninja Luxe Café Pro Series",
        price: "$499.99",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
        rating: "4.9",
        type: "All-in-One",
        latestPriceLink: "https://www.amazon.com/dp/B0C3MQHBNH",
        description: "4-in-1 espresso, drip coffee, and cold brew system with Barista Assist.",
        source: "amazon.com",
        milkFrother: true,
        capacity: "2.1L",
        bestFor: "Versatility",
        easeOfUse: "Guided",
        pumpPressure: "15 Bar",
        grinder: "Integrated Conical",
        heatingSystem: "ThermoJet"
    },
    {
        name: "Rancilio Silvia Pro X",
        price: "$1,875.00",
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800",
        rating: "4.9",
        type: "Dual Boiler",
        latestPriceLink: "https://www.amazon.com/dp/B09M7N6P6W",
        description: "Dual boiler precision with PID temperature control and soft infusion.",
        source: "amazon.com",
        milkFrother: true,
        capacity: "2.5L",
        bestFor: "Pros",
        easeOfUse: "Expert",
        pumpPressure: "Vibratory",
        grinder: "None",
        heatingSystem: "Dual Boiler PID"
    },
    {
        name: "De'Longhi Stilosa",
        price: "$99.95",
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800",
        rating: "4.3",
        type: "Manual Espresso",
        latestPriceLink: "https://www.amazon.com/dp/B08C96D692",
        description: "Budget-friendly 15-bar pump espresso machine for beginners.",
        source: "walmart.com",
        milkFrother: true,
        capacity: "1.0L",
        bestFor: "Budget",
        easeOfUse: "Intermediate",
        pumpPressure: "15 Bar",
        grinder: "None",
        heatingSystem: "Stainless Steel Boiler"
    },
    {
        name: "Gaggia Classic Pro",
        price: "$449.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
        rating: "4.6",
        type: "Semi-Automatic",
        latestPriceLink: "https://www.amazon.com/dp/B07RQ3NL76",
        description: "The gold standard for home espresso, built to last a lifetime.",
        source: "amazon.com",
        milkFrother: true,
        capacity: "2.1L",
        bestFor: "Durability",
        easeOfUse: "Intermediate",
        pumpPressure: "15 Bar",
        grinder: "None",
        heatingSystem: "Rapid Steam Boiler"
    }
];
