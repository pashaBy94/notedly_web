import React from "react";
import preload from "./../../img/preloader.gif";

const Preloader = ()=>{
    return(<div className="flex w-full h-full items-center justify-center "><img src={preload} className=' h-16 w-16'/></div>)
}
export default Preloader; 