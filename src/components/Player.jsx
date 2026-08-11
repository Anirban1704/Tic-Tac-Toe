import React from "react";
import {useState} from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditClick(){
    setIsEditing(isEditing => !isEditing);
  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
      {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save" }</button>
    </li>
  );
}
