import React from "react";
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";

const delayedTada = {
  from: tada.from,
  "3%": tada["10%"],
  "6%": tada["20%"],
  "9%": tada["30%"],
  "12%": tada["40%"],
  "15%": tada["50%"],
  "18%": tada["60%"],
  "21%": tada["70%"],
  "24%": tada["80%"],
  "27%": tada["90%"],
  "30%": tada.to,
  to: tada.to
};

const animation = keyframes`${delayedTada}`;
const AnimateDiv = styled.div`
  animation: infinite 3s ${animation};
`;

const ImageStart = ({ pictures, dispatch }) => {
  const [, pic2] = pictures;
  return (
    <div className="image" onClick={() => dispatch({ type: "start" })}>
      {pic2 ? (
        <img className="pic pic-two" alt="pic two" src={pic2} />
      ) : (
        <AnimateDiv>
          <p className="clickToStart">Click Here To Start!</p>
        </AnimateDiv>
      )}
    </div>
  );
};

export default ImageStart;
