import React from "react";

export const RoundedImage = ({ src }: { src: string }) => {
  return (
    <div style={{ width: "100px", height: "100px" }}>
      <img src={src} alt='some alt text' style={{ borderRadius: "50%" }} />
    </div>
  );
};

