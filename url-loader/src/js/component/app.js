import React, { useState } from 'react';
import Loader from './loader';
import data from './data.json';
import logo from '../../images/file.png';
import video from '../../video/file.mp4';

function App(){
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders);
    }

    return (
        <div>
            ReactJS
            <p>
                <video src={video} alt="" width={360} controls poster={logo}/>
            </p>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Show what i have learned</button>
        </div>
    );
}

export default App;