import React from 'react'

export default function CardElement(props){
    return(
        <div onClick={()=>{props.handleFlip(props.card)}} id={props.card.id}
         className={`card ${props.card.flipped? "flip" : ""} `}>
                <div className="front_card">
                        <img className="icon" src={`assets/imagens/${props.card.icon}.png`} 
                        alt={props.card.icon}></img>
                </div>

                <div className="back_card">
                        {"</>"}
                </div>
        </div>
    )
}