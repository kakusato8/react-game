import { useEffect, useState } from 'react';
import './Game.css';
import MessageArea from './component/MessageArea';
import ButtonArea from './component/ButtonArea';
import { Event, Choice, EventKind } from './common/Event';
import { findEventById } from './common/EventDatum';
import ObjectArea from './component/ObjectArea';
import { useNavigate } from 'react-router-dom';
import EndRoll from './component/Endroll';

function Game() {

  // 他画面遷移用のnavigateメソッドを定義
  const navigate = useNavigate();

  // 初期イベントを指定
  const initialEventId = "A1";

  // イベントの設定用関数を定義
  const [event,setEvent] = useState(findEventById(initialEventId));

  // 選択肢を実行するための関数
  const hundleButtonClick = function(choice:Choice)  {

    // event独自の関数を実行
    choice.action();
    
    // 新しいイベントをfindEventByIdで取得してsetModelで更新する
    const updatedEvent = findEventById(choice.nextEventId);
    setEvent(updatedEvent!);

  };


  // 特殊イベント
  if(event?.EventKind==EventKind.Specific){
    if(event?.eventId==="E111") {return <EndRoll />}
  }

  // 通常イベント
  return (
    <div className="gameContainer" style={{ backgroundImage: `url(${event!.backGroundImgPath})` }}>
      <ObjectArea model={event!}></ObjectArea>
      <div className="messageContainer">
        <MessageArea model={event!}/>
      </div>
      <div className="buttonContainer">
        <ButtonArea model={event!} callBack={hundleButtonClick} />
      </div>
    </div>
  );
}

export default Game;


