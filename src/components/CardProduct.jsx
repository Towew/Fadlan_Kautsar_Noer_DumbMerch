import React from 'react'

const styles = {
    cardContainer: {
        width: '241px',
        height: '410px',
        backgroundColor: '#212121',
        marginRight: '10px'
    },
    img: {
        width: '241px',
        height: '312px',
        objectFit: 'cover',
    },
    title: {
        color: '#F74D4D',
        fontSize: '18px',
        paddingLeft: '15px',
        margin: '7px 0px',
    },
    p: {
        color: 'white',
        fontSize: '14px',
        paddingLeft: '15px',
        marginBottom: '5px',
    }
}

function CardProduct(props) {
    return (
        <div style={styles.cardContainer} className="cardProductContainer">
            <img style={styles.img} src={props.img} alt='' />
            <h6 style={styles.title}>{props.title}</h6>
            <p style={styles.p}>Rp.{props.price}</p>
            <p style={styles.p}>Stock : {props.stock}</p>
        </div>
    )
}

export default CardProduct;