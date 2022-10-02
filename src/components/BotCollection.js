import React from "react";
import BotCard from "./BotCard";

function BotCollection( {bots, selectBot, deleteBot} ) {
  // Your code here
  const botCollection = bots.map( bot => <BotCard   key={bot.id} handleDelete={deleteBot} handleClick={selectBot} bot={bot} />)
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCollection}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
