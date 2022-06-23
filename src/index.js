import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const img1="https://picsum.photos/600/500";
const img2="https://picsum.photos/590/500";
const img3="https://picsum.photos/595/500";
const img4="https://picsum.photos/599/500";
const img5="https://picsum.photos/591/500";
const img6="https://picsum.photos/592/500";
const img7="https://picsum.photos/593/500";
const img8="https://picsum.photos/594/500";
const img9="https://picsum.photos/596/500";
const img10="https://picsum.photos/597/500";
const img11="https://picsum.photos/598/500";
const img12="https://picsum.photos/589/500";


ReactDom.render(
  <>

    <h1 className='heading'>THIS IS MY GALLARY</h1>
    <div className='img_div'>
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img3} alt="" />
  <img src={img4} alt="" />
  <img src={img5}alt="" />
  <img src={img6} alt="" />
  <img src={img7} alt="" />
  <img src={img8} alt="" />
  <img src={img9} alt="" />
  <img src={img10} alt="" />
  <img src={img11} alt="" />
  <img src={img12} alt="" />
  </div>
  </>,

  document.getElementById('root')
)

