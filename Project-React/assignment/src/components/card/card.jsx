import React from "react";
import image from "../../public/doctor.jpg"
import classes from "./card.module.css";

const Card = (props) => {
    
    return (
        <div className={classes.card} onClick={() => {props.changeHandler(props.type)}}>
            <div className={classes.card_images}>
                <img className={classes.card_image} src={image}></img>
            </div>
            <p className={classes.card_header}>{props.type}</p>
            <p className={classes.card_desc}>Getting troubles? Schedule a checkout</p>
        </div>
    )
}

export default Card;