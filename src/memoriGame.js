import React, {useState, useEffect} from 'react'
import GameOver from "./componentes/GameOver.js"
import Tabuleiro from "./componentes/Tabuleiro"
import game from "./game/index"


export default function MemoryGame(){
    const [gameOver, setGameOver] = useState(false)
    const [cards, setcards] = useState([])
    
    useEffect(()=>{
       setcards(game.criando_cartas())
       }, [])



function restart(){
        setGameOver(false)
        game.clearCard()
         setcards(game.criando_cartas())

}

function handleFlip(card){
  
game.flipCard(card.id, ()=>{
    setGameOver(true)
}, ()=>{
    setcards([...game.cards])
})
setcards([...game.cards])
} 
    

    return(
        <div>
             <Tabuleiro handleFlip={handleFlip} cards={cards}></Tabuleiro>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
    )
}
