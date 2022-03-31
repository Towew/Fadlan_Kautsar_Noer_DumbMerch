import React from 'react'
import OffCanvasAdmin from '../components/OffCanvasAdmin';
import '../components/AdminComplain.module.css'
import cssModule from '../components/AdminComplain.module.css'
import Chat1 from '../components/assets/chat1_admin.png'
import Navigation from '../components/Navigation';

function AdminComplain() {
    return (
        <div className={cssModule.AdminComplainC}>

            <Navigation />

            <div className={cssModule.mainContainer}>
                <div className={cssModule.container}>
                    <div className={cssModule.leftSide}>
                        <OffCanvasAdmin />
                    </div>
                    <div className={cssModule.rightSide}>
                        <img src={Chat1} />
                        <input type="text" placeholder='Send Message' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminComplain;