import React from "react";
function Card(props) {
    return (<>
      <div className='_cards col-md-4 my-3'>
        <div className='_card'>
          <img
            src={props.imgsrc}
            alt='dark' className='card_img'
          />
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_title'>{props.sname}</h3>
            <a href={props.link} target="_blank"><button>Watch Now</button></a>
          </div>
        </div>
  
      </div>
    </>);
  }

  export default Card;