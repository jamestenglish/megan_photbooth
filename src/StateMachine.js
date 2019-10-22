import React, { useEffect } from "react";
import axios from "axios";

const StateMachine = ({ state, dispatch, webcamRef, displayOverlayRef }) => {
  const { mode, pictures, isFlash, count } = state;

  const isTakePic = mode === "takePic";
  const isPrinting = mode === "printing";
  const isCountdown = mode === "countdown";

  useEffect(() => {
    if (isCountdown) {
      setTimeout(() => dispatch({ type: "decrement" }), 1000);
    }
  }, [isCountdown, count, dispatch]);

  useEffect(() => {
    if (isFlash) {
      setTimeout(() => dispatch({ type: "takePic" }), 100);
      setTimeout(() => dispatch({ type: "start" }), 700);
    }
  }, [isFlash, dispatch]);

  useEffect(() => {
    if (isTakePic) {
      dispatch({ type: "storePic", data: webcamRef.current.getScreenshot() });
    }
  }, [isTakePic, dispatch, webcamRef]);

  useEffect(() => {
    if (isPrinting) {
      const [pic1, pic2, pic3] = pictures;
      axios
        .post("/upload", { pic1, pic2, pic3 })
        .then(() => {
          return axios.post("/print");
        })
        .then(() => {
          setTimeout(() => dispatch({ type: "done" }), 10000);
        });
    }
  }, [isPrinting, pictures, dispatch]);
  return <></>;
};

export default StateMachine;
