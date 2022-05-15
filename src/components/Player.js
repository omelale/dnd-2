import React,{useState} from 'react'
import { Label, Text, Circle } from "react-konva";

function Player(props) {
    const [x, setX] = useState(props.width * 0.5);
    const [y, setY] = useState(props.height * 0.5);
    const PLAYER_SIZE = 0.067;
    const handleDragStart = () => {

    }
    const handleDragEnd = (e) => {
        if (e.target.x() <= props.width * 0.5){
            e.target.children[0].attrs.fill = 'white';
            e.target.children[1].attrs.fill='black';
        } else {
            e.target.children[0].attrs.fill = 'black';
            e.target.children[1].attrs.fill = 'white';
        } 
    }
    const handleDragMove = (e) => {
        const currentX = e.evt.clientX;
        const currentY = e.evt.clientY;
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
        <Label draggable x={props.player.x} y={props.player.y} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragMove={handleDragMove} onTouchMove={handleDragMove}>
            <Circle radius={50} width={props.width * PLAYER_SIZE} height={props.height * PLAYER_SIZE} fill="red"/>
            <Text x={-10} y={200 * PLAYER_SIZE} text={props.player.name} fill={x < props.width * 0.5 ? 'black' : 'white'} />
        </Label>
    )
}

export default Player