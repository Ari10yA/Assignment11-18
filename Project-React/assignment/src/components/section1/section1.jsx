import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../card/card"
import { useMemo } from "react";
import { memo } from "react";

import classes from "./section1.module.css";


const Section1 = (props) => {

    const [cards, setCards] = useState([{_id: 'unique', type: 'All'}]);

    useEffect(() => {
        fetch('https://assignment-rest.onrender.com/types', {
            method: "GET"
        })
        .then(response => {
            if(response.status == 200){
                return response.json()
            }
            else{
                throw(new Error('Data not found!'))
            }
            
        })
        .then(data => {
            setCards(prev => {
                return [
                    ...prev,
                    ...data.data
                ]
            })
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


    let cardElements;
    if(cards.length>0){
        cardElements = cards.map((card) => {
            return <Card key={card._id} type={card.type} changeHandler={props.changeHandler}></Card>
        })
    }


    return (
        <div className={classes.section1}>
            <h1 className={classes.section1_header}>Book an appointment for an in-clinic consultation</h1>
            <p className={classes.section1_header2}>Find experience doctors across all specialties</p>
            
            <div className={classes.section1_cards}>
                {cardElements}
            </div>

        </div>
    )
}

export default memo(Section1);