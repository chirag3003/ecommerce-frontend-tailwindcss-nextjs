import OrderProductCard from "./OrderProductCard"
import StatusBar from "./StatusBar"
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

export default function Example() {
    return (
        <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600">Order Details</h1>

                <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
                    <dl className="flex">
                        <dt className="text-gray-500">Order number&nbsp;</dt>
                        <dd className="font-medium text-indigo-600">W086438695</dd>
                        <dt>
                            <span className="sr-only">Date</span>
                            <span className="text-gray-400 mx-2" aria-hidden="true">
                                &middot;
                            </span>
                        </dt>
                        <dd className="font-medium text-indigo-600">
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
                    <p className="text-sm font-medium text-indigo-600">
                        {"status"} on <time dateTime={"2021-03-24"}>March 24, 2021</time>
                    </p>
                    <StatusBar step={products[0].step} />
                </div>

                <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
                    <h2 id="order-heading" className="sr-only">
                        Your order
                    </h2>

                    <h3 className="sr-only">Items</h3>
                    {products.map((product) => (
                        <OrderProductCard key={product.id} product={product} />
                    ))}

                    <div className="sm:ml-40 sm:pl-6">
                        <h3 className="sr-only">Your information</h3>

                        <h4 className="sr-only">Addresses</h4>
                        <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                            <div>
                                <dt className="font-medium text-indigo-600">Shipping address</dt>
                                <dd className="mt-2 text-gray-700">
                                    <address className="not-italic">
                                        <span className="block">Kristin Watson</span>
                                        <span className="block">7363 Cynthia Pass</span>
                                        <span className="block">Toronto, ON N3Y 4H8</span>
                                    </address>
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-indigo-600">Billing address</dt>
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
                                <dt className="font-medium text-indigo-600">Payment method</dt>
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
                                <dt className="font-medium text-indigo-600">Shipping method</dt>
                                <dd className="mt-2 text-gray-700">
                                    <p>DHL</p>
                                    <p>Takes up to 3 working days</p>
                                </dd>
                            </div>
                        </dl>

                        <h3 className="sr-only">Summary</h3>

                        <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                            <div className="flex justify-between">
                                <dt className="font-medium text-indigo-600">Subtotal</dt>
                                <dd className="text-gray-700">$36.00</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="flex font-medium text-indigo-600">
                                    Discount
                                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">FIRSTTIME</span>
                                </dt>
                                <dd className="text-gray-700">-₹18.00 (50%)</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="font-medium text-indigo-600">Shipping</dt>
                                <dd className="text-gray-700">₹5.00</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="font-medium text-indigo-600">Total</dt>
                                <dd className="text-indigo-600">₹23.00</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </main>
    )
}
