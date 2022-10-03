import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import SortBar from "./SortBar";

function BotsPage() {
  
  const [bots, setBots] = useState([])
  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(res => res.json())
    .then(data => setBots(data))
  }, [])

  const handleBotSelection = (id) => setBots(bots.map(bot => bot.id === id ? { ...bot, chosen:true } : bot ))

  const handleBotDiselection = id => setBots(bots.map(bot => bot.id === id ? { ...bot, chosen: false } : bot ))


  const handleBotDeletion = (id) => {
    
    setBots(bots.filter(bot => bot.id !== id )) 

    fetch(`http://localhost:8002/bots/`+ id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }) 
    .catch(console.log)  
  }
  
  const handleSort = (e) => {
    
    if(e.target.name === "health") {
      fetch('http://localhost:8002/bots')
      .then(res => res.json())
      .then(data => setBots(data.sort((bot1, bot2) => bot2.health - bot1.health)))
    } else if(e.target.name === "damage") {
      fetch('http://localhost:8002/bots')
      .then(res => res.json())
      .then(data => setBots(data.sort((bot1, bot2) => bot2.damage - bot1.damage)))
    } else if(e.target.name === "armor") {
      fetch('http://localhost:8002/bots')
      .then(res => res.json())
      .then(data => setBots(data.sort((bot1, bot2) => bot2.armor - bot1.armor)))
    }
  }

  return (
    <div>
      <SortBar handleSort={handleSort}/>
      <YourBotArmy 
      bots={bots.filter(bot => bot.chosen)} 
      deleteBot={handleBotDeletion} 
      removeBot={handleBotDiselection}
      />
      <BotCollection bots={bots} deleteBot={handleBotDeletion} selectBot={handleBotSelection} />
    </div>
  )
}

export default BotsPage;
