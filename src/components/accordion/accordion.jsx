import {useState,useReducer} from 'preact/hooks';
import './accordion.css';
import data from '../../jsondata/data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state === action.index ? null : action.index;
    default:
      throw new Error();
  }
};

const Accordion = () => {
  const [expand, dispatch] = useReducer(reducer, null);

  function handleClick(e, i) {
    dispatch({ type: 'TOGGLE', index: i });
  }

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <>
          <div key={index} className='accordion'>
            <div className='title'>{item.title}
              <button className='expand' onClick={(e) => handleClick(e, index)}>{expand === index ? "-" : "+"}</button>
            </div>
            {expand === index ? <div className='values'>{item.values}</div> : null}
          </div>
          </>
        );
      })}
    </div>
  );
};


export default Accordion;