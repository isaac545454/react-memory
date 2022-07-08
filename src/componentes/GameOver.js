import React, {Fragment} from "react"

export default function GameOver(props){
    return( props.show  ?
        <div id="game_over">
            <div>parabens, voce completou o jogo</div>
            <button id="restart" onClick={props.handleRestart}>restart</button>
        </div> : <Fragment />
    )
}