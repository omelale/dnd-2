import React from 'react';
import { Stage, Layer } from 'react-konva';
import Player from './Player';


function Field(props) {
    return (
        <Stage width={props.width} height={props.height} className="field-container">
            <Layer>
                {props.players.map(player => <Player width={props.width} height={props.height} player={player} key={player.id}/>)}
            </Layer>
        </Stage>
    )
}

export default Field