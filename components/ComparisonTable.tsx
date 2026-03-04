import { products } from "@/lib/products";

const ComparisonTable = () => {
    const tableProducts = products.slice(0, 4); // Show top 4 in the table

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-luxury">
                <thead>
                    <tr className="bg-matte-black text-cream uppercase text-[10px] tracking-[0.3em] text-left">
                        <th className="px-8 py-6 border-b border-white/10 font-serif">Feature</th>
                        {tableProducts.map((product) => (
                            <th key={product.id} className="px-8 py-6 border-b border-white/10 font-serif text-center">
                                {product.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                        { label: "Type", key: "type" as const },
                        { label: "Price", key: "price" as const },
                        { label: "Price Range", key: "priceRange" as const },
                        { label: "Milk Frother", key: "milkFrother" as const },
                        { label: "Capacity", key: "capacity" as const },
                        { label: "Best For", key: "bestFor" as const },
                        { label: "Ease of Use", key: "easeOfUse" as const },
                    ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-cream/20" : "bg-white"}>
                            <td className="px-8 py-5 font-bold text-coffee-brown uppercase text-[10px] tracking-widest border-b border-coffee-brown/5">
                                {row.label}
                            </td>
                            {tableProducts.map((product) => (
                                <td key={product.id} className="px-8 py-5 text-center text-matte-black/70 border-b border-coffee-brown/5 font-sans">
                                    {typeof product[row.key] === "boolean"
                                        ? (product[row.key] ? "✓ Yes" : "✕ No")
                                        : product[row.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className="px-8 py-8 border-b border-coffee-brown/5"></td>
                        {tableProducts.map((product) => (
                            <td key={product.id} className="px-8 py-8 border-b border-coffee-brown/5 text-center">
                                <a
                                    href={product.latestPriceLink}
                                    className="inline-block text-gold text-[10px] font-bold tracking-widest border-b-2 border-gold hover:text-coffee-brown hover:border-coffee-brown transition-all pb-1"
                                >
                                    VIEW PRICE
                                </a>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;
