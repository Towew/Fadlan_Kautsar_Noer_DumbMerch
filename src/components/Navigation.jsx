import Frame from "./assets/Frame.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import cssModule from './Navigation.module.css'

export default function Navigation() {
    return (


        <nav>
            <div className={cssModule.navbarStore}>
                <div className={cssModule.navLeft}>
                    <img src={Frame} alt="" />
                </div>
                <ul className={cssModule.navRight}>
                    <li>Complain</li>
                    <li>Profile</li>
                    <li>Category</li>
                    <li>Product</li>
                    <li>Logout</li>
                </ul>
            </div>
        </nav>


    );
}