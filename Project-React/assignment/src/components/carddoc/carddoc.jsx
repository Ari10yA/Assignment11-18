import React from "react";

import classes from "./carddoc.module.css"

const CardDoc = (props) => {

    return (
        <div className={classes.carddoc}>

            <div className={classes.image_container}>
                <div className={classes.hero}>
                    <img className={classes.image} src={props.data.image}></img>
                    <div className={classes.badge}></div>
                </div>
                
            </div>
            
            
            <div className={classes.info}>
                <h3 className={classes.info_header}>{props.data.name}</h3>
                <p className={classes.info_type}>{props.data.type}</p>
                <p className={classes.info_exp}>{props.data.experience} years experience overall</p>
                <p className={classes.info_addr}><b>{props.data.address}</b>, • {props.data.name}'s Clinic</p>
                <p className={classes.info_fees}>₹{props.data.fee} consultation fee at clinic</p>
                <hr className={classes.dotted}></hr>
                <div className={classes.info_rating}><div className={classes.badge3}></div>100%</div>
                <div className={classes.info_rating2}>{props.data.patient} Patient Stories</div>
            </div>
            <div className={classes.cta}>
                <span className={classes.cta_text}><div className={classes.badge2}></div>Available Today</span>
                <div className={classes.cta_button}>
                    <span className={classes.cta_button_head}>Book Appointment No</span>
                    <span className={classes.cta_button_text}>No Booking Fee</span>
                </div>
            </div>
        </div>
    )
}

export default CardDoc;