import './App.css';
import React, { useState, useEffect } from 'react';
import Field from './components/Field';

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
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div className="App">
            <Field width={size.width} height={size.height}/>
        </div>
    );
}

export default App;
