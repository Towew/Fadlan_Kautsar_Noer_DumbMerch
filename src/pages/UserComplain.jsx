import React from 'react'
import OffCanvasUser from '../components/OffCanvasUser';
import '../components/UserComplain.module.css'
import cssModule from '../components/UserComplain.module.css'
import Apfp from '../components/assets/admin1.png'
import Navigation from '../components/Navigation';

function AdminComplain() {
    return (
        <div className={cssModule.UserComplainC}>

            <Navigation />

            <div className={cssModule.mainContainer}>
                <div className={cssModule.container}>
                    <div className={cssModule.leftSide}>
                        <OffCanvasUser />
                    </div>
                    <div className={cssModule.auCompRight}>
                        <div className={cssModule.flxRow}>
                            <div className={cssModule.bubbleRight}>
                                Hello Admin, I Need Your Help
                            </div>
                        </div>
                        <div className={cssModule.flxRow}>
                            <img className='mr20' src={Apfp} alt='icon' />
                            <div className={cssModule.bubbleLeft}>
                                Yes, Is there anything I can help
                            </div>
                            {/* <div>
              <p>Yes, Is there anything I can help</p>
            </div> */}
                        </div>
                        <input className='mt20 ml20' type='text' placeholder='Send Message' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminComplain;