import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import Card from './Card';
import sdata from './sdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <nav ><h1 className='text-center mb-3'>My Fav Series</h1></nav>
    <div className='main row'>
    {sdata.map(value=>(<Card
    imgsrc={value.imgsrc}
    sname={value.sname} link={value.link} title={value.title}
  />))}
    </div>
  </>
);



// can be done in this way

// function ncards(value) {
//   console.log(value)
//   return (<Card
//     imgsrc={value.imgsrc}
//     sname={value.sname} link={value.link} title={value.title}
//   />)
// }

//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <nav ><h1 className='text-center mb-3'>My Fav Series</h1></nav>
//     <div className='main row'>
//     {sdata.map(ncards)}
//     </div>
//   </>
// );
