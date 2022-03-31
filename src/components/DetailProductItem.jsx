import React from 'react'
import cssModules from '../components/DetailProduct.module.css'
import { useNavigate } from 'react-router-dom';

function DetailProductItem(props) {

    const navigate = useNavigate();

    const handleNavigateToHomepage = () => {
        navigate("/homepage");
    };

    return (
        <div>
            <div className={cssModules.detailProductItemContainer}>
                <div className={cssModules.detailProductLeft}>
                    <img src={props.img} alt='' />
                </div>
                <div className={cssModules.detailProductRight}>
                    <h2>{props.title}</h2>
                    <p className='one'>Stock : {props.stock}</p>
                    <p className='two'>-{props.spec1} <br />
                        -{props.spec2} <br />
                        -{props.spec3} <br />
                        -{props.spec4} <br />
                        -{props.spec5}</p>
                    <p className='desc'>{props.description}</p>
                    <h6 className={cssModules.h6price}>Rp.{props.price}</h6>
                    <button onClick={handleNavigateToHomepage}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default DetailProductItem;