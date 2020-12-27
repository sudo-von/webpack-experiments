import React, { useState } from 'react';
import Loader from './loader';
import data from './data.json';
import sass from '../../sass/sass.scss';
import less from '../../less/less.less';
import stylus from '../../stylus/stylus.styl';

function App(){
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders);
    }

    return (
        <div>
            ReactJS
            <p className="sass">Sass</p>
            <p className="less">Less</p>
            <p className="stylus">Stylus</p>
            <p className="post-css">Postcss</p>
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