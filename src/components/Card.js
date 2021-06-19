import React from 'react';
import './Card.css';


function Card(props){

    const classes = 'card ' + props.className;
    //any value set on className props is added to long string of classes which is set on this below div inside of the card
    //classes "card with whitespace" + props className
    return(
        <div className={classes}>
                {props.children}  
        </div>
    )
}


export default Card;