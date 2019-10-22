import React, { useState, useReducer, useEffect } from "react";
import Webcam from "react-webcam";
import Fullscreen from "react-full-screen";

import "./App.css";
import Overlay from "./Overlay";
import reducer from "./reducer";

const videoConstraints = {
  width: 640,
  height: 485,
  facingMode: "user"
};

function App() {
  const webcamRef = React.useRef(null);
  const divRef = React.useRef(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  // }, [webcamRef]);

  const [isFull, setFull] = useState(false);
  const [state, dispatch] = useReducer(reducer, { pictures: [] });
  console.log({ state });
  const { mode } = state;
  const isTakePic = mode === "takePic";
  useEffect(() => {
    if (isTakePic) {
      dispatch({ type: "storePic", data: webcamRef.current.getScreenshot() });
    }
  }, [isTakePic, dispatch]);

  // console.log(webcamRef);
  return (
    <Fullscreen enabled={isFull}>
      {!!mode && <Overlay state={state} dispatch={dispatch} />}
      <div className="row">
        <div className="images">
          {/* <button onClick={capture}>Capture photo</button> */}
          {/* <div style={{ fontSize: "20px" }}>"test" test test</div> */}
          <div className="image dates" onClick={() => setFull(true)}>
            <p className="date">
              October 26<sup>th</sup>
            </p>
            <p>2019</p>
          </div>
          <div className="image" onClick={() => dispatch({ type: "start" })}>
            <p className="clickToStart">Click Here To Start!</p>
          </div>
          <div className="image meganAndHunter">
            <p className="megan">Megan</p> <p className="amp">&</p>{" "}
            <p className="hunter">Hunter</p>
          </div>
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
