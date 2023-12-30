import './StartMenu.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function StartMenu() {
  return (
    <div className='menu' >
      <Link className='com-button' to="/game">ゲームを始める</Link>
    </div>
  );
}

export default StartMenu;
