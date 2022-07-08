
import React from 'react'
import Cardelement from "./cardElement"

export default function Tabuleiro(props){
    return(
        <div id="tabuleiro">
                 {props.cards.map((card, index) =>
                 <Cardelement handleFlip={props.handleFlip} card={card} key={index}></Cardelement>
                 )}
        </div>
    )
}
