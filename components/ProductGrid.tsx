"use client";

import ProductCard from "./ProductCard";

interface ProductGridProps {
    products: any[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id || index}
                    product={product}
                    featured={index < 3}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
