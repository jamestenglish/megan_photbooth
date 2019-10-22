import React, { useState, useReducer } from "react";
import Webcam from "react-webcam";
import Fullscreen from "react-full-screen";

import "./App.css";
import Overlay from "./Overlay";
import reducer from "./reducer";
import StateMachine from "./StateMachine";
import getDisplayAndClass from "./getDisplayAndClass";
import ImageDate from "./ImageDate";
import ImageStart from "./ImageStart";
import ImageNames from "./ImageNames";

const videoConstraints = {
  width: 640,
  height: 485,
  facingMode: "user"
};

function App() {
  const webcamRef = React.useRef(null);
  const divRef = React.useRef(null);
  const displayOverlayRef = React.useRef("");

  const [isFull, setFull] = useState(false);
  const [state, dispatch] = useReducer(reducer, { pictures: [] });

  const { isFlash, mode, pictures } = state;
  const [display, displayClass] = getDisplayAndClass(state);
  return (
    <Fullscreen enabled={isFull}>
      <StateMachine
        state={state}
        dispatch={dispatch}
        displayOverlayRef={displayOverlayRef}
        webcamRef={webcamRef}
      />
      {!!mode && (
        <Overlay
          isFlash={isFlash}
          display={display}
          displayClass={displayClass}
        />
      )}
      <div className="row">
        <div className="images">
          <ImageDate setFull={setFull} pictures={pictures} />
          <ImageStart dispatch={dispatch} pictures={pictures} />
          <ImageNames pictures={pictures} />
        </div>
        <div className="preview" ref={divRef}>
          <Webcam
            audio={false}
            // height={520}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // width={1080}
            videoConstraints={videoConstraints}
          />
        </div>
      </div>
    </Fullscreen>
  );
}
// 3e3e47
// fff9dc
// fffff0
// 3d3d48
export default App;
