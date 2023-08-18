import React from "react";
import { Layout } from "ui";
import { UserProfile as PropDrillingUserProfile } from "drilling/UserProfile";
import { UserProfileWithContext as ContextUserProfile } from "context/UserProfile";
import { UserProfile as StateManagerUserProfile } from "manager/UserProfile";

const appWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
};

const App = () => {
  const title = "Main App Example";

  return (
    <Layout title={title}>
      <div style={appWrapperStyles}>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            flex: "1",
          }}
        >
          <PropDrillingUserProfile />
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            flex: "1",
          }}
        >
          <ContextUserProfile />
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            flex: "1",
          }}
        >
          <StateManagerUserProfile />
        </div>
      </div>
    </Layout>
  );
};

export default App;

