import React, { useEffect, useState } from 'react';
import './ButtonArea.css';
import './common.css';
import { Event, Choice } from '../common/Event';
import { soundAudio as effectSoundAudio } from '../common/common';

function ButtonArea(props:{model:Event, callBack:(choice:Choice) => void}) {

  return (
    <div className='ButtonArea-body'>
        {props.model.choices.map((choice:Choice, index:number) => (
          <button className="com-button" key={index} onClick={()=>{effectSoundAudio.play();props.callBack(choice)}}>
            {choice.label}
          </button>
        ))}
        </div>

  );
}



export default ButtonArea;