

export const userNavigation =   [
    { name: 'My Profile', href: '/account' },
    { name: 'My Orders', href: '/account/orders' },
    { name: 'Sign out', href: '#', onClick:(auth)=>{auth.logout()} },
];
export const loggedOutNavigation = [
    { name: 'Login', href: '/account/login' },
    { name: 'Register', href: '/account/register' },
]
export const navigation = {
    categories: [
        {
            name: 'Categories',
            featured: [
                { name: 'Sleep', href: '/products' },
                { name: 'Swimwear', href: '/products' },
                { name: 'Underwear', href: '/products' },
            ],
            collection: [
                { name: 'Everything', href: '/products' },
                { name: 'Core', href: '/products' },
                { name: 'New Arrivals', href: '/products' },
                { name: 'Sale', href: '/products' },
            ],
            categories: [
                { name: 'Basic Tees', href: '/products' },
                { name: 'Artwork Tees', href: '/products' },
                { name: 'Bottoms', href: '/products' },
                { name: 'Underwear', href: '/products' },
                { name: 'Accessories', href: '/products' },
            ],
            brands: [
                { name: 'Full Nelson', href: '/products' },
                { name: 'My Way', href: '/products' },
                { name: 'Re-Arranged', href: '/products' },
                { name: 'Counterfeit', href: '/products' },
                { name: 'Significant Other', href: '/products' },
            ],
        },
    ],
    pages: [
    ],
}
