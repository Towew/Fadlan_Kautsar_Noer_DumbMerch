import Frame from "./assets/Frame.png";
import { Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import cssModule from './Navigation.module.css'

export default function Navigation() {
    return (


        <nav>
            <div className={cssModule.navbarStore}>
                <div className={cssModule.navLeft}>
                    <Link to='/homepage'><img src={Frame} alt="" /></Link>
                </div>
                <ul className={cssModule.navRight}>
                    <li><Link to='/user-complaint'>Complain</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/list-category'>Category</Link></li>
                    <li><Link to='/list-product'>Product</Link></li>
                    <li><Link to='/login'>Logout</Link></li>
                </ul>
            </div>
        </nav>


    );
}