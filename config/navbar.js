

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
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        },
    ],
    pages: [
    ],
}
