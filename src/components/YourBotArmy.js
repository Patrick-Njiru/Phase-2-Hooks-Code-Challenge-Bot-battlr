import React from "react";
import BotCard from "./BotCard";

function YourBotArmy( {bots, deleteBot, selectBot } ) {
  //your bot army code here...
  const yourBotArmy = bots.map( bot => 
  <BotCard key={bot.id} bot={bot} handleDelete={deleteBot} handleClick={selectBot}  />)
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
