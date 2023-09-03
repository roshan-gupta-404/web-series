import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import Card from './Card';
import sdatas from './sdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <nav ><h1 className='text-center mb-3'>My Fav Series</h1></nav>
    <div className='main row'>
      <Card
        imgsrc={sdatas[0].imgsrc}
        sname={sdatas[0].sname} link={sdatas[0].link} title={sdatas[0].title}
      />
      <Card
        imgsrc={sdatas[1].imgsrc}
        sname={sdatas[1].sname} link={sdatas[1].link} title={sdatas[1].title}
      />
      <Card
        imgsrc={sdatas[0].imgsrc}
        sname={sdatas[0].sname} link={sdatas[0].link} title={sdatas[0].title}
      />
      <Card
        imgsrc={sdatas[0].imgsrc}
        sname={sdatas[0].sname} link={sdatas[0].link} title={sdatas[0].title}
      />
    </div>

  </>
);
