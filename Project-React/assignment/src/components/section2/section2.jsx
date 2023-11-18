import React from "react";
import CardDoc from "../carddoc/carddoc";

import classes from "./section2.module.css"

const Section2 = (props) => {

    let docCardElements;
    if(props.docData.length>0){
        docCardElements = props.docData.map((card) => {
            return <CardDoc key={card._id} data={card}></CardDoc>
        })
    }



    return (
        <div className={classes.section2}>
            <div className={classes.card_lists}>
                {
                    docCardElements
                }
            </div>
        </div>
    )
}

export default Section2;