import React from 'react'

function ImageGallery({ images }) {
    return (
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                        src={images[2].src}
                        alt={images[2].alt}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <img
                    src={images[3].src}
                    alt={images[3].alt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
        </div>
    )
}

export default ImageGallery