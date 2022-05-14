import React,{useState} from 'react'
import { Label, Text, Circle } from "react-konva";

function Player(props) {
    const [x, setX] = useState(props.width * 0.5);
    const [y, setY] = useState(props.height * 0.5);
    const handleDragStart = () => {

    }
    const handleDragEnd = (e) => {
        if (e.target.x() <= props.width * 0.5){
            e.target.children[0].attrs.fill = 'white';
        } else {
            e.target.children[0].attrs.fill = 'black';
        } 
    }
    const handleDragMove = (e) => {
        const currentX = e.evt.clientX;
        const currentY = e.evt.clientY;
        console.log(e.target._lastPos.x);
        
        if (currentX < 0 ){
            e.target.attrs.x = 20;
            e.target.attrs.y = e.target._lastPos.y;
        }
        if (currentY < 0){
            e.target.attrs.y = 20;
            e.target.attrs.x = e.target._lastPos.x;
        }
        if (currentX > props.width){
            e.target.attrs.x = props.width - 20;
        }
        if (currentY > props.height){
            e.target.attrs.y = props.height - 20;
        }
    }
    return (
        <Label draggable x={x} y={y} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragMove={handleDragMove}>
            <Circle radius={50} width={30} height={30} fill="red" style={{border:'2px solid black'}} />
            <Text draggable x={-10} y={20} text="tope" />
        </Label>
    )
}

export default Player