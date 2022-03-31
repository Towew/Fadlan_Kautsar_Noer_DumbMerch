import React from 'react'
import cssModules from '../components/Homepage.module.css'
import CardProduct from '../components/CardProduct.jsx'
import Mouse from '../components/assets/Mouse.png'
import Keyboard from '../components/assets/Keyboard.png'
import Navigation from '../components/Navigation.jsx';

function Homepage() {
    return (
        <div>

            <Navigation />

            <div className={cssModules.homepagePageContainer}>
                <h5>Product</h5>
                <div className={cssModules.homepageCardContainer}>
                    <CardProduct />
                </div>
            </div>
        </div>
    )
}

export default Homepage;