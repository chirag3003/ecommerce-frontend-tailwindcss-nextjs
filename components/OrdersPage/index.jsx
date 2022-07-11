import OrderCard from './OrderCard'
import {useContext, useEffect, useState} from "react";
import Auth from "../../helpers/Auth";

const ordersData = [
    {
        number: 'WU88191111',
        href: '#',
        invoiceHref: '#',
        createdDate: 'Jul 6, 2021',
        createdDatetime: '2021-07-06',
        deliveredDate: 'July 12, 2021',
        deliveredDatetime: '2021-07-12',
        total: '$160.00',
        products: [
            {
                id: 1,
                name: 'Micro Backpack',
                description:
                    'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt:
                    'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
            {
                id: 1,
                name: 'Micro Backpack',
                description:
                    'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt:
                    'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
        ],
    },
    {
        number: 'WU88191112',
        href: '#',
        invoiceHref: '#',
        createdDate: 'Jul 6, 2021',
        createdDatetime: '2021-07-06',
        deliveredDate: 'July 12, 2021',
        deliveredDatetime: '2021-07-12',
        total: '$160.00',
        products: [
            {
                id: 1,
                name: 'Micro Backpack',
                description:
                    'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt:
                    'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
        ],
    },
]


export default function OrdersPage() {
    const auth = useContext(Auth)
    const [orders,setOrders] = useState([])
    useEffect(() => {
        auth.Axios.get("/order").then(res => {
            console.log(res.data)
            setOrders(res.data)
        }).catch(err => {console.error(err)})

    },[])
    return (
        <div className="bg-gray-50">
            <main className="py-24">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Check the status of recent orders, manage returns, and discover similar products.
                        </p>
                    </div>
                </div>

                <section aria-labelledby="recent-heading" className="mt-16">
                    <h2 id="recent-heading" className="sr-only">
                        Recent orders
                    </h2>
                    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                        <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                            {orders.map((order) => (
                                <OrderCard key={order.number} order={order} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
