import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductCardProps {
    product: Product;
    featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
    return (
        <div className={`card-luxury overflow-hidden group border border-coffee-brown/5 ${featured ? 'ring-2 ring-gold/20' : ''}`}>
            <div className="relative h-64 w-full bg-cream-light overflow-hidden p-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <div className="flex items-center space-x-1">
                        <span className="text-gold text-xs">★</span>
                        <span className="text-[10px] font-bold text-matte-black">{product.rating}</span>
                    </div>
                </div>
                {featured && (
                    <div className="absolute top-4 left-4 bg-gold px-3 py-1 rounded-full shadow-sm">
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Top Pick</span>
                    </div>
                )}
            </div>

            <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-coffee-brown tracking-tight group-hover:text-gold transition-colors leading-tight">
                        {product.name}
                    </h3>
                    <span className="text-lg font-bold text-coffee-brown font-serif whitespace-nowrap ml-4">
                        {product.price}
                    </span>
                </div>

                <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
                    Ideal for: {product.idealUser}
                </p>

                <p className="text-sm text-matte-black/70 mb-6 line-clamp-2 leading-relaxed font-sans">
                    {product.shortDescription}
                </p>

                <div className="space-y-3 mb-8">
                    {product.pros.slice(0, 3).map((pro, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <span className="text-gold mt-1 text-xs">✓</span>
                            <span className="text-xs text-matte-black/60 font-medium">{pro}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-coffee-brown/5">
                    <Link
                        href={product.latestPriceLink}
                        className="gold-button px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] w-full text-center"
                    >
                        CHECK LATEST PRICE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
