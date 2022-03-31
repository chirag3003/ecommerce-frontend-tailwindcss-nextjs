import React from 'react'
import { StarIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Reviews({ reviews }) {
    return (
        <section aria-labelledby="reviews-heading" className="border-t border-gray-200 pt-10 lg:pt-16">
            <h2 id="reviews-heading" className="sr-only">
                Reviews
            </h2>

            <div className="space-y-10">
                {reviews.featured.map((review) => (
                    <div key={review.id} className="flex flex-col sm:flex-row">
                        <div className="mt-6 order-2 sm:mt-0 sm:ml-16">
                            <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                            <p className="sr-only">{review.rating} out of 5 stars</p>

                            <div
                                className="mt-3 space-y-6 text-sm text-gray-600"
                                dangerouslySetInnerHTML={{ __html: review.content }}
                            />
                        </div>

                        <div className="order-1 flex items-center sm:flex-col sm:items-start">
                            <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />

                            <div className="ml-4 sm:ml-0 sm:mt-4">
                                <p className="text-sm font-medium text-gray-900">{review.author}</p>
                                <div className="mt-2 flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews