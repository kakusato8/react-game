import { Event, Choice, EventKind } from './Event';

const eventDatum:Event[] = [
    { eventId: "A1",
      text: "今日から冒険の始まりだ。\r\nさあどこに行こうかな！！",
      EventKind: EventKind.Normal,
      choices: [
        { label: "仲間を探しに行く！", action: () => console.log("B1へ") ,nextEventId: "B111"},
        { label: "武器を買いに行く！！", action: () => console.log("B2へ") ,nextEventId: "B121"},
      ],
      backGroundImgPath: "img/background/washitu.jpg",
      leftImg: {path:"img/character/yusha.png", reverse:true},
      rightImg: {path:"", reverse:false},
      centerImg: {path:"", reverse:false},
    },
    { eventId: "B111",
        text: "広場にやってきた。\r\n魔女「あなた、仲間を探しているんだってね？\r\n私が仲間になってもいいよ。」",
        EventKind: EventKind.Normal,
        choices: [
          { label: "魔法使いを仲間にする。", action: () => console.log(""),nextEventId:"B112" },
          { label: "仲間無しで魔王を倒しに行く", action: () => console.log(""),nextEventId:"C111" },
        ],
        backGroundImgPath: "img/background/washitu.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"", reverse:false},
      },
    { eventId: "B112",
        text: "魔法使いが仲間になった！",
        EventKind: EventKind.Normal,
        choices: [
          { label: "次へ", action: () => console.log("B2へ"),nextEventId:"C111" },
        ],
        backGroundImgPath: "img/background/washitu.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"", reverse:false},
      },
    { eventId: "B121",
        text: "武器屋にやってきた。\r\n武器屋「勇者の剣を買っていくかい？」",
        EventKind: EventKind.Normal,
        choices: [
          { label: "勇者の剣を買う", action: () => console.log(""),nextEventId:"B122" },
          { label: "武器なしで魔王を倒しに行く", action: () => console.log(""),nextEventId:"C111" },
        ],
        backGroundImgPath: "img/background/shiro.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"", reverse:false},
      },
    { eventId: "B122",
        text: "勇者の剣を手に入れた！",
        EventKind: EventKind.Normal,
        choices: [
          { label: "次へ", action: () => console.log("B2へ"),nextEventId:"C111" },
        ],
        backGroundImgPath: "img/background/shiro.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"", reverse:false},
      },
    { eventId: "C111",
        text: "とうとう魔王の城に辿り着いた！",
        EventKind: EventKind.Normal,
        choices: [
          { label: "魔王に攻撃する", action: () => console.log("") ,nextEventId:"C121"},
          { label: "諦めて逃げる", action: () => console.log("") ,nextEventId:"C131"},
        ],
        backGroundImgPath: "img/background/shiro.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"img/tool/maou.png", reverse:false},
      },
    { eventId: "C121",
        text: "魔王を倒した！",
        EventKind: EventKind.Normal,
        choices: [
          { label: "次へ", action: () => console.log("") ,nextEventId:"C122"},
        ],
        backGroundImgPath: "img/background/shiro.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"img/tool/maou.png", reverse:false},
      },
    { eventId: "C131",
        text: "恐くなって逃げだした！！",
        EventKind: EventKind.Normal,
        choices: [
          { label: "次へ", choiceType: EventKind.Specific, action: () => {} ,nextEventId:"E111", nextPageUrl:"/"},
        ],
        backGroundImgPath: "img/background/shiro.jpg",
        leftImg: {path:"img/character/yusha.png", reverse:true},
        rightImg: {path:"img/character/majo.png", reverse:false},
        centerImg: {path:"img/tool/maou.png", reverse:false},
      },
    { eventId: "E111",
        text: "THE END",
        EventKind: EventKind.Specific,
        choices: [
        ],
        backGroundImgPath: "",
        leftImg: {path:"", reverse:true},
        rightImg: {path:"", reverse:false},
        centerImg: {path:"", reverse:false},
      },
    // 同様の形式で30個以上のデータを定義
    // ...
  ];

  function findEventById(id: string): Event|null {
    let event = eventDatum.find(model => model.eventId === id);
    if(event){
      return event
    }else{
      return null;
    }
  };

  

  export {eventDatum, findEventById};