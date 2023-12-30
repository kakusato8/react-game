type Event = {
    eventId: string;
    text: string;
    EventKind: EventKind;
    choices: any;
    backGroundImgPath: string;
    leftImg: {path:string, reverse:boolean};
    centerImg: {path:string, reverse:boolean};
    rightImg: {path:string, reverse:boolean};
}

type Choice = {
  label: string;
  action: () => void;
  nextEventId: string;
  nextPageUrl: string;
}


enum EventKind{
  Normal, Specific
}

export type {Event, Choice};
export {EventKind};
  