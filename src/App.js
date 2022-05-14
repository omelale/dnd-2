import './App.css';
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

function App() {
    const IMAGE_HEIGHT = 1050;
    const IMAGE_WIDTH = 1800;
    const imageRatio = IMAGE_HEIGHT / IMAGE_WIDTH;
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [containerRatio, setContainerRatio] = useState(windowDimension.height / windowDimension.width);
    const findSize = () => {
        if (containerRatio > imageRatio) {
            return {
                width: windowDimension.width,
                height: (windowDimension.width * imageRatio)
            }
        }
        return {
            width: windowDimension.height / imageRatio,
            height: windowDimension.height
        }
    }
    const [size, setSize] = useState(findSize());
    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
        setContainerRatio(windowDimension.height / windowDimension.width)
        setSize(findSize())
        console.log(size);
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div className="App">
            <Stage width={size.width} height={size.height} className="field-container">
                <Layer>
                    <Circle x={0.5 * size.width} y={0.5 * size.height} stroke="black" radius={50} />
                </Layer>
            </Stage>
        </div>
    );
}

export default App;
