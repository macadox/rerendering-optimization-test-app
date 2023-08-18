import React from "react";
import { RoundedImage } from "./RoundedImage";

const cardDetailsContainerStyle = {
  border: "1px solid #ccc",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
};

const cardMainTextParagraphStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};
const cardDetailsParagraphStyle = {
  color: "#555",
};

const CardMainText = ({ text }: { text: string }) => (
  <p style={cardMainTextParagraphStyle}>{text}</p>
);

const CardDetail = ({ text }: { text: string }) => (
  <p style={cardDetailsParagraphStyle}>{text}</p>
);

export const CardDetails = ({
  cardMain,
  cardDetails,
}: {
  cardMain: string;
  cardDetails: string[];
}) => {
  return (
    <div style={cardDetailsContainerStyle}>
      <div>
        <CardMainText text={cardMain} />
        {cardDetails.map((detail, index) => (
          <CardDetail key={index} text={detail} />
        ))}
      </div>
      <RoundedImage src='http://unsplash.it/100/100' />
    </div>
  );
};

