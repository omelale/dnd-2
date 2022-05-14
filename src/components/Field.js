import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import Player from './Player';


function Field(props) {
    return (
        <Stage width={props.width} height={props.height} className="field-container">
            <Layer>
                <Player width={props.width} height={props.height}/>
            </Layer>
        </Stage>
    )
}

export default Field