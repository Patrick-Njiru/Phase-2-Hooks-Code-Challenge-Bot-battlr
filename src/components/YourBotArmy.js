import React from "react";
import BotCard from "./BotCard";

function YourBotArmy( {bots, deleteBot, removeBot } ) {
  //your bot army code here...
  const yourBotArmy = bots.map( bot => <BotCard key={bot.id} bot={bot} deleteBot={deleteBot} removeBot={removeBot}  />)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBotArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
