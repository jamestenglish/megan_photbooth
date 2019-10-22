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
      </div>
    </>
  );
};

export default Overlay;
