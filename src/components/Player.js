import React from 'react'
import { Label, Text, Circle } from "react-konva";

function Player(props) {
    const handleDragStart = () => {

    }
    const handleDragEnd = (e) => {
        console.log(e.target.x() < props.width * 0.5);
        if (e.target.x() <= props.width * 0.5){
            e.target.children[0].attrs.fill = 'white';
        } else {
            e.target.children[0].attrs.fill = 'black';
        } 
    }
    return (
        <Label draggable x={props.width * 0.5} y={props.height * 0.5} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <Circle radius={50} width={30} height={30} fill="red" style={{border:'2px solid black'}} />
            <Text draggable x={-10} y={20} text="tope" />
        </Label>
    )
}

export default Player