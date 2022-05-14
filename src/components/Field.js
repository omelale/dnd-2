import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Field(props) {
    return (
        <Stage width={props.width} height={props.height} className="field-container">
            <Layer>
                <Circle x={0.5 * props.width} y={0.5 * props.height} stroke="black" radius={50} />
            </Layer>
        </Stage>
    )
}

export default Field