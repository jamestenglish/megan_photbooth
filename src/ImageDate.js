import React from "react";

const ImageDate = ({ setFull, pictures }) => {
  const [pic1] = pictures;

  return (
    <div className="image dates" onClick={() => setFull(true)}>
      {pic1 ? (
        <img className="pic pic-one" alt="pic one" src={pic1} />
      ) : (
        <>
          <p className="date">
            October 26<sup>th</sup>
          </p>
          <p>2019</p>
        </>
      )}
    </div>
  );
};

export default ImageDate;
