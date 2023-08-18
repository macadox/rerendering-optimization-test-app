import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.2rem",
          textAlign: "center",
        }}
      >
        <h1>{title}</h1>
      </header>
      <main
        style={{
          flex: 1,
          padding: "1rem",
        }}
      >
        {children}
      </main>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.2rem",
          textAlign: "center",
        }}
      >
        <p>Use the App with Profiler enabled</p>
      </footer>
    </div>
  );
};

