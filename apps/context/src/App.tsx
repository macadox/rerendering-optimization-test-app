import React from "react";
import { Layout } from "ui";
import { UserProfile } from "./UserProfile";

const App = () => {
  const title = "App Context Example";

  return (
    <Layout title={title}>
      <UserProfile />
    </Layout>
  );
};

export default App;

