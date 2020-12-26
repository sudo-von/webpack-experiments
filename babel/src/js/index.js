import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('Who is that pokemon?');
search(id)
    .then((data) => {
        render(data);
    }).catch(() =>{
        console.log('There is no pokemon')
    });
