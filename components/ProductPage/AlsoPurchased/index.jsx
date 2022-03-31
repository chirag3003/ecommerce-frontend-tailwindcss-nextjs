import ProductCard from 'components/ProductCard'
import React from 'react'

function AlsoPurchased({ products }) {
    return (
        <section aria-labelledby="related-products-heading" className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
                    Customers also purchased
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AlsoPurchased