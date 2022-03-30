import React from 'react'
import CategorySection from './CategorySection'
import Cause from './Cause'
import Favourites from './Favourites'
import Header from './Header'
import SaleHeading from './SaleHeading'

function Home() {
    return (
        <>
            <Header />
            <main>
                <CategorySection />
                <Cause />
                <Favourites />
                <SaleHeading />
            </main>
        </>
    )
}

export default Home