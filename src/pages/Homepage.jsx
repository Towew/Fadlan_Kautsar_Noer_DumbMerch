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
                    <CardProduct img={Mouse} title="Mouse" price="500.000" stock="600" />
                    <CardProduct img={Keyboard} title="Keyboard" price="700.000" stock="600" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;