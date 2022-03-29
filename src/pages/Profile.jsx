import React from 'react';
import FotoProfile from '../components/assets/FotoFadlan.jpeg';
import logoDumb from '../components/assets/Frame.png';
import FotoMouse from '../components/assets/Mouse.png';
import cssModule from '../components/Profile.module.css';
import Navigation from '../components/Navigation.jsx';


function Profile() {
    return (

        <div>

            <Navigation />

            <div className={cssModule.mainContainer}>

                <div className={cssModule.leftSide}>
                    <div className={cssModule.leftSideLeft}>
                        <h2>My Profile</h2>
                        <img src={FotoProfile} />
                    </div>
                    <div className={cssModule.leftSideRight}>
                        <div>
                            <h3>Name</h3>
                            <p>Fadlan</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>Fadlankece@jamail.com</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>088912341123</p>
                        </div>
                        <div>
                            <h3>Gender</h3>
                            <p>Male</p>
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti ratione necessitatibus iste ipsa, fuga animi, dicta commodi nulla consequatur voluptas, eligendi et dignissimos? Perspiciatis quas dolor quisquam est sint?</p>
                        </div>
                    </div>
                </div>
                <div className={cssModule.rightSide}>
                    <h2>My Transaction</h2>
                    <div className={cssModule.transactionCont}>
                        <div className={cssModule.trImg}>
                            <img src={FotoMouse} alt="" />
                        </div>
                        <div className={cssModule.trDetail}>
                            <h3>Mouse</h3>
                            <p className={cssModule.trDetail2}><span>Saturday</span>, 14 Juli 2021</p>
                            <p className={cssModule.trDetail3}>Price : Rp.500.000</p>
                            <p className={cssModule.trDetail4}>Sub Total : 500.000</p>
                        </div>
                        <div className={cssModule.trLogo}>
                            <img src={logoDumb} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile