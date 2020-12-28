import React from "react";
import {ReactComponent as Logo} from "../film-svgrepo-com.svg";
// import './Loading.css'
// import { TweenMax, Power3 } from "gsap";

function Loading() {
  return (
    <div className="reel fadez-out">
      <Logo className="h-50 w-50 fa-spin" />
    </div>
  );
}

export default Loading;
