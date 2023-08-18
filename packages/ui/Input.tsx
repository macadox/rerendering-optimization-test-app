import React from "react";
import { InfoBox } from "./InfoBox";

const inputContainerStyle = {
  marginBottom: "1rem",
};

export const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxSizing: "border-box",
} as React.CSSProperties;

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ id, label, value, onChange }: Props) => {
  return (
    <div style={inputContainerStyle}>
      <label htmlFor={id} style={labelStyle}>
        <span>{label}</span>
      </label>
      <input
        type='text'
        id={id}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
};

