import React from "react";

const SoundContext = React.createContext({soundOnFlag:false, bgm:"", setSoundOnFlag: (FlagSet:boolean) => {}, setBgm: (bgmSet:string) => {}});
export {SoundContext}