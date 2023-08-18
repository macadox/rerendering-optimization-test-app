import React from "react";
import { CardDetails } from "./components/CardDetails";

const cardContainerStyle = {
  border: "1px solid #ccc",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  maxWidth: "400px",
  marginBottom: "1rem",
};

export const Card = ({
  cardMain,
  cardDetails,
  cardTitle,
}: {
  cardMain: string;
  cardDetails: string[];
  cardTitle: string;
}) => {
  return (
    <div style={cardContainerStyle}>
      <h1>{cardTitle}</h1>
      <CardDetails cardMain={cardMain} cardDetails={cardDetails} />
    </div>
  );
};

