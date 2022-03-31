import React from 'react'
import cssModules from '../components/Register.module.css'
import logoDumbmerch from '../components/assets/Frame.png'
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div className={cssModules.mainContainer}>

            <div className={cssModules.container}>

                <div className={cssModules.leftSide}>
                    <img src={logoDumbmerch} alt="Logo Dumbmerch" />
                    <h1>Easy, Fast and Reliable</h1>
                    <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span>Indonesia</span></p>

                    <div className={cssModules.btnGrp}>
                        <Link to="/login"><a href="#" className={cssModules.btnLogin}>Login</a></Link>
                        <Link to="/register"><a href="#" className={cssModules.btnReg}>Register</a></Link>
                    </div>

                </div>

                <div className={cssModules.rightSide}>
                    <div className={cssModules.rightContainer}>
                        <h2>Register</h2>
                        <form>
                            <input type="text" id='name' name='name' placeholder='Name' />
                            <input type="email" id='email' name='email' placeholder='Email' />
                            <input type="password" id='password' name='password' placeholder='Password' />
                            <button onClick={handleNavigateToLogin} >Login</button>
                        </form>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Register;