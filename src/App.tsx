import './App.css';
import StartMenu from './StartMenu';
import Game from './Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SoundContext } from './common/SoundContext';
import { useContext, useEffect, useState } from 'react';
import SoundToggleArea from './component/SoundToggleArea';


function App() {

  const [soundOnFlag, setSoundOnFlag] = useState(false);
  const [bgm, setBgm] = useState('./music/entranceOfForest.mp3');
  
  return (
    <SoundContext.Provider value={{soundOnFlag:soundOnFlag, bgm:bgm, setSoundOnFlag:setSoundOnFlag, setBgm:setBgm}}>
    <SoundToggleArea></SoundToggleArea>
    <Router>
    <Routes>
      <Route path="/" element={<StartMenu />} />
      <Route path="/game" element={<Game/>} />
    </Routes>
    </Router>
    </SoundContext.Provider>
  );
}

export default App;
