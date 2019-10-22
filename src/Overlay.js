import React from "react";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import classNames from "classnames";

const zoomAnimation = keyframes`${zoomIn}`;
const ZoomDiv = styled.div`
  animation: infinite 1s ${zoomAnimation};
`;

const ZoomWrapper = ({ children, displayClass }) => {
  if (displayClass === "overlay-printing") {
    return <>{children}</>;
  }
  return <ZoomDiv>{children}</ZoomDiv>;
};

const Overlay = ({ isFlash, display, displayClass }) => {
  // const [pic1, pic2, pic3] = pictures;
  // console.log(pic1);

  return (
    <>
      <div className={classNames("overlay", { flash: isFlash })}></div>
      <div className="overlay">
        {display && (
          <div className={`overlay-count ${displayClass}`}>
            <ZoomWrapper displayClass={displayClass}>
              <h1>{display}</h1>
            </ZoomWrapper>
          </div>
        )}
        {/* {isPrinting && (
          <div className="overlay-count overlay-printing">
            <h1>Printing...</h1>
          </div>
        )} */}
        {/* 
        {pic1 && <img className="pic pic-one" alt="pic one" src={pic1} />}
        {pic2 && <img className="pic pic-two" alt="pic two" src={pic2} />}
        {pic3 && <img className="pic pic-three" alt="pic three" src={pic3} />} */}
      </div>
    </>
  );
};

export default Overlay;
