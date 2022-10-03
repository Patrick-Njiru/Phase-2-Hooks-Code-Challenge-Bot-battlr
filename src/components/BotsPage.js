import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  //start here with your code for step one
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
  

  return (
    <div>
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
