import React, { useState } from 'react';
import Loader from './loader';
import data from './data.json';

function App(){
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders);
    }

    return (
        <div>
            ReactJS
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