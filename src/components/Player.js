import React from 'react'
import { Label, Text, Circle } from "react-konva";

function Player(props) {
  return (
      <Label draggable x={props.width * 0.5} y={props.height * 0.5}>
          <Circle radius={50} width={30} height={30} fill="red" />
          <Text draggable x={-10} y={20} text="tope" />
      </Label>
  )
}

export default Player