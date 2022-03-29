import React from 'react'
import cssModules from '../components/Login.module.css'
import logoDumbmerch from '../components/assets/Frame.png'

function Login() {
    return (
        <div className={cssModules.mainContainer}>

            <div className={cssModules.container}>

                <div className={cssModules.leftSide}>
                    <img src={logoDumbmerch} alt="Logo Dumbmerch" />
                    <h1>Easy, Fast and Reliable</h1>
                    <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span>Indonesia</span></p>

                    <div className={cssModules.btnGrp}>
                        <a href="#" className={cssModules.btnLogin}>Login</a>
                        <a href="#" className={cssModules.btnReg}>Register</a>
                    </div>

                </div>

                <div className={cssModules.rightSide}>
                    <div className={cssModules.rightContainer}>
                        <h2>Login</h2>
                        <form>
                            <input type="email" id='email' name='email' placeholder='Email' />
                            <input type="password" id='password' name='password' placeholder='Password' />
                            <button>Login</button>
                        </form>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Login;