import React, { useEffect, useState } from 'react';
import { Event } from '../common/Event';
import './ObjectArea.css';

function ObjectArea(props:{model:Event}){
       return (
        <div>
          <div className="objectArea-left-body" style={{ backgroundImage: `url(${props.model.leftImg.path})`, transform: `scale(${props.model.leftImg.reverse?"-1":"1"}, 1)`}}>
          </div>
          <div className="objectArea-center-body" style={{ backgroundImage: `url(${props.model.centerImg.path})` , transform: `scale(${props.model.centerImg.reverse?"-1":"1"}, 1) translate(-50%, 0%)`}}>
          </div>
          <div className="objectArea-right-body" style={{ backgroundImage: `url(${props.model.rightImg.path})` , transform: `scale(${props.model.rightImg.reverse?"-1":"1"}, 1)`}}>
          </div>
        </div>
      );
}

export default ObjectArea;