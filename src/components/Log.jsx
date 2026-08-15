import React from "react";
import { useState } from "react";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li>
          Player: {turn.player} Select: {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
