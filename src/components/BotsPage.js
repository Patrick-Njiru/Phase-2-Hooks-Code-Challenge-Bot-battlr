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

  return (
    <div>
      <YourBotArmy bots={bots} />
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage;
