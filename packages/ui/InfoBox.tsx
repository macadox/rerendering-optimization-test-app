import React, { useRef } from "react";

const QuestionMark = () => (
  <svg
    height='16px'
    width='16px'
    version='1.1'
    id='Capa_1'
    viewBox='0 0 32 32'
    fill='#FFFFFF'
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />

    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <g id='SVGRepo_iconCarrier'>
      <g>
        <g id='question_x5F_mark'>
          <g>
            <path d='M17.6,30c0,1.102-0.895,2-2,2s-2-0.898-2-2c0-1.109,0.895-2,2-2S17.6,28.891,17.6,30z' />
            <path d='M15.676,25.977c-1.336,0-2.59-0.523-3.535-1.469c-0.945-1.105-1.465-2.359-1.465-3.695 s0.52-2.59,1.465-3.371l6.688-6.688C19.584,9.996,20,8.992,20,7.926c0-1.07-0.416-2.074-1.172-2.828 c-1.559-1.559-4.096-1.562-5.654,0C12.416,5.852,12,6.855,12,7.926H8c0-2.137,0.834-4.148,2.348-5.66 c3.02-3.023,8.285-3.02,11.309,0.004C23.168,3.777,24,5.785,24,7.926c0,2.137-0.832,4.145-2.344,5.656l-6.688,6.523 c-0.389,0.391-0.389,1.023,0,1.414c0.391,0.391,1.023,0.391,1.414,0c0.254-0.258,0.293-0.555,0.293-0.711h4 c0,1.336-0.52,2.594-1.465,3.699C18.266,25.453,17.012,25.977,15.676,25.977L15.676,25.977z' />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const InfoBox = ({ content }: { content: React.ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => dialogRef.current?.show();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <div
      onMouseEnter={openDialog}
      onMouseLeave={closeDialog}
      onTouchStart={openDialog}
      onTouchEnd={closeDialog}
      style={{ display: "inline-flex", position: "relative" }}
    >
      <div
        style={{
          background: "#333",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionMark />
      </div>
      <dialog
        ref={dialogRef}
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#fff",
          border: "1px solid #333",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          padding: "10px",
          zIndex: 1,
          fontSize: "0.9rem", // Adjust font size for the dialog text
          width: "420px",
        }}
      >
        {content}
      </dialog>
    </div>
  );
};

