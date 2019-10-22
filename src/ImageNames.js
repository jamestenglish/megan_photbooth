import React from "react";

const ImageNames = ({ pictures }) => {
  const [, , pic3] = pictures;
  return (
    <div className="image meganAndHunter">
      {pic3 ? (
        <img className="pic pic-three" alt="pic three" src={pic3} />
      ) : (
        <>
          <p className="megan name">Megan</p> <p className="amp">&</p>{" "}
          <p className="hunter name">Hunter</p>
        </>
      )}
    </div>
  );
};

export default ImageNames;
