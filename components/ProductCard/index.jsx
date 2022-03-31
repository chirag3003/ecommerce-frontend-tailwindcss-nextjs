import React from 'react'

function ProductCard({ id, imageSrc, imageAlt, href, name, description, options, price }) {
    return (
        <div
            key={id}
            className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
        >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href={href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{options}</p>
                    <p className="text-base font-medium text-gray-900">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard