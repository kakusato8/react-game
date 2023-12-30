import { useContext, useEffect, useReducer, useState } from 'react';
import './SoundToggle.css';
import './common.css';
import { SoundContext } from '../common/SoundContext';
import { bgmAudio } from '../common/common';

// SoundContextの情報に従ってBGMを鳴らす
function SoundToggle() {

  // SoundContextを取得する。
  const soundContext = useContext(SoundContext);

  // Toggleを変更した場合の処理
  const switchToggle = ()=>{
    // OFF→ON
    if(soundContext.soundOnFlag === false){
      soundContext.setSoundOnFlag(true);
      bgmAudio.play();
      return;
    }
    // ON→OFF
    soundContext.setSoundOnFlag(false);
    bgmAudio.pause();
  }

  // BGM変更時にAudioに反映させる
  useEffect(
    ()=>{
      bgmAudio.src = soundContext.bgm;
    },
    [soundContext.bgm]
    )
    

  
  return (

    <div className="toggle_button">
     <input
      id="toggle"
      className="toggle_input"
      type='checkbox'
      checked={soundContext.soundOnFlag}
      onChange={() => { switchToggle() }}
    />
     <label htmlFor="toggle" className="toggle_label"/>
    </div>

  );
}

export default SoundToggle;