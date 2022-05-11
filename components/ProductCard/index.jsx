import React from 'react'

function ProductCard({ _id, images, slug,  title, description,  price, }) {
    return (
        <div
            key={_id}
            className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
        >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                    src={images[0]}
                    alt={title}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href={`/products/${slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {title}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-base font-medium text-gray-900">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard