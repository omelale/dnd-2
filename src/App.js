import './App.css';
import React, { useState, useEffect } from 'react';
import Field from './components/Field';
import data from './constants/data'

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
    const generateCoordinates = ()=>{
        let x = Math.floor(Math.random() * size.width);
        let y = Math.floor(Math.random() * size.height);
        return{x: x, y: y}
    }
    const [players, setPlayers] = useState(data.players.map(player => {
        let pl = player;
        let coord=generateCoordinates();
        pl.x = coord.x;
        pl.y = coord.y;
        return pl
    })); 
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div className="App">
            <Field width={size.width} height={size.height} players={players}/>
        </div>
    );
}

export default App;
