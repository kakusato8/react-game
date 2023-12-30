import React, { useEffect, useState } from 'react';
import { Event } from '../common/Event';
import './MessageArea.css';

function MessageArea(props:{model:Event}){

    const [textState, setTextState] = useState({
      remainingText: props.model.text,
      displayedText: ""
    });
  
    // テキストを1文字ずつ表示する関数
    function displayText() {
      setTextState(prevState => {
        if (prevState.remainingText.length > 0) {
          return {
            remainingText: prevState.remainingText.substring(1),
            displayedText: prevState.displayedText + prevState.remainingText[0]
          };
        } else {
          return prevState;
        }
      });
    }

    // props.model.textが更新されたときに、テキスト表示をリセットする
    useEffect(() => {
      setTextState({
        remainingText: props.model.text,
        displayedText: ""
      });
    }, [props.model.text]); // props.model.textの変更を検知する

  
    useEffect(() => {
      const interval = setInterval(displayText, 100);
      return () => clearInterval(interval);
    }, [props.model.text]); // 空の依存リストで初回のみ実行
    

    return (
        <div className="messageArea-body">
          <p>{textState.displayedText}</p>
        </div>
      );
}

export default MessageArea;