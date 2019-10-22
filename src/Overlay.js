import React, { useEffect, useRef } from "react";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import classNames from "classnames";

const zoomAnimation = keyframes`${zoomIn}`;
const ZoomDiv = styled.div`
  animation: infinite 1s ${zoomAnimation};
`;

const Overlay = ({ state, dispatch }) => {
  const displayCount = useRef("");

  const { mode, count, isFlash, pictures, display } = state;
  const isCountdown = mode === "countdown";
  const isPrinting = mode === "printing";
  useEffect(() => {
    if (isCountdown) {
      displayCount.current = display;
      setTimeout(() => dispatch({ type: "decrement" }), 1000);
    }
  }, [isCountdown, count, dispatch, display]);
  useEffect(() => {
    if (isFlash) {
      setTimeout(() => dispatch({ type: "takePic" }), 100);
      setTimeout(() => dispatch({ type: "start" }), 700);
    }
  }, [isFlash, dispatch]);

  useEffect(() => {
    if (isPrinting) {
      setTimeout(() => dispatch({ type: "done" }), 10000);
    }
  }, [isPrinting, dispatch]);

  const [pic1, pic2, pic3] = pictures;

  return (
    <>
      <div className={classNames("overlay", { flash: isFlash })}></div>
      <div className="overlay">
        {isCountdown && (
          <div className={`overlay-count count-${count}`}>
            <ZoomDiv>
              <h1>{displayCount.current}</h1>
            </ZoomDiv>
          </div>
        )}
        {isPrinting && (
          <div className="overlay-count overlay-printing">
            <h1>Printing...</h1>
          </div>
        )}

        {pic1 && <img className="pic pic-one" alt="pic one" src={pic1} />}
        {pic2 && <img className="pic pic-two" alt="pic two" src={pic2} />}
        {pic3 && <img className="pic pic-three" alt="pic three" src={pic3} />}
      </div>
    </>
  );
};

export default Overlay;
