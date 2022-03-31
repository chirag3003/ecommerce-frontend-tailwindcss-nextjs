/* This example requires Tailwind CSS v2.0+ */
const products = [
    {
        id: 1,
        name: 'Cold Brew Bottle',
        description:
            'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
        href: '#',
        quantity: 1,
        price: '$32.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
        imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
        step: 2
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Example() {
    return (
        <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Order Details</h1>

                <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
                    <dl className="flex">
                        <dt className="text-gray-500">Order number&nbsp;</dt>
                        <dd className="font-medium text-gray-900">W086438695</dd>
                        <dt>
                            <span className="sr-only">Date</span>
                            <span className="text-gray-400 mx-2" aria-hidden="true">
                                &middot;
                            </span>
                        </dt>
                        <dd className="font-medium text-gray-900">
                            <time dateTime="2021-03-22">March 22, 2021</time>
                        </dd>
                    </dl>
                    <div className="mt-4 sm:mt-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            View invoice<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                    <h4 className="sr-only">Status</h4>
                    <p className="text-sm font-medium text-gray-900">
                        status on <time dateTime={"2021-03-24"}>March 24, 2021</time>
                    </p>
                    <div className="mt-6" aria-hidden="true">
                        <div className="bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-2 bg-indigo-600 rounded-full"
                                style={{ width: `calc((${products[0].step} * 2 + 1) / 8 * 100%)` }}
                            />
                        </div>
                        <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                            <div className="text-indigo-600">Order placed</div>
                            <div className={classNames(products[0].step > 0 ? 'text-indigo-600' : '', 'text-center')}>
                                Processing
                            </div>
                            <div className={classNames(products[0].step > 1 ? 'text-indigo-600' : '', 'text-center')}>
                                Shipped
                            </div>
                            <div className={classNames(products[0].step > 2 ? 'text-indigo-600' : '', 'text-right')}>
                                Delivered
                            </div>
                        </div>
                    </div>
                </div>

                <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
                    <h2 id="order-heading" className="sr-only">
                        Your order
                    </h2>

                    <h3 className="sr-only">Items</h3>
                    {products.map((product) => (
                        <div key={product.id} className="py-10 border-b border-gray-200 flex space-x-6">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                            />
                            <div className="flex-auto flex flex-col">
                                <div>
                                    <h4 className="font-medium text-gray-900">
                                        <a href={product.href}>{product.name}</a>
                                    </h4>
                                    <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                                </div>
                                <div className="mt-6 flex-1 flex items-end">
                                    <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                        <div className="flex">
                                            <dt className="font-medium text-gray-900">Quantity</dt>
                                            <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                                        </div>
                                        <div className="pl-4 flex sm:pl-6">
                                            <dt className="font-medium text-gray-900">Price</dt>
                                            <dd className="ml-2 text-gray-700">{product.price}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="sm:ml-40 sm:pl-6">
                        <h3 className="sr-only">Your information</h3>

                        <h4 className="sr-only">Addresses</h4>
                        <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                            <div>
                                <dt className="font-medium text-gray-900">Shipping address</dt>
                                <dd className="mt-2 text-gray-700">
                                    <address className="not-italic">
                                        <span className="block">Kristin Watson</span>
                                        <span className="block">7363 Cynthia Pass</span>
                                        <span className="block">Toronto, ON N3Y 4H8</span>
                                    </address>
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">Billing address</dt>
                                <dd className="mt-2 text-gray-700">
                                    <address className="not-italic">
                                        <span className="block">Kristin Watson</span>
                                        <span className="block">7363 Cynthia Pass</span>
                                        <span className="block">Toronto, ON N3Y 4H8</span>
                                    </address>
                                </dd>
                            </div>
                        </dl>

                        <h4 className="sr-only">Payment</h4>
                        <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                            <div>
                                <dt className="font-medium text-gray-900">Payment method</dt>
                                <dd className="mt-2 text-gray-700">
                                    <p>Apple Pay</p>
                                    <p>Mastercard</p>
                                    <p>
                                        <span aria-hidden="true">•••• </span>
                                        <span className="sr-only">Ending in </span>1545
                                    </p>
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">Shipping method</dt>
                                <dd className="mt-2 text-gray-700">
                                    <p>DHL</p>
                                    <p>Takes up to 3 working days</p>
                                </dd>
                            </div>
                        </dl>

                        <h3 className="sr-only">Summary</h3>

                        <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                            <div className="flex justify-between">
                                <dt className="font-medium text-gray-900">Subtotal</dt>
                                <dd className="text-gray-700">$36.00</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="flex font-medium text-gray-900">
                                    Discount
                                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">FIRSTTIME</span>
                                </dt>
                                <dd className="text-gray-700">-₹18.00 (50%)</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="font-medium text-gray-900">Shipping</dt>
                                <dd className="text-gray-700">₹5.00</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="font-medium text-gray-900">Total</dt>
                                <dd className="text-gray-900">₹23.00</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </main>
    )
}
