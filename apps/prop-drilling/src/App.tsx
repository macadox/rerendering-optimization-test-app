import React from "react";
import { Layout } from "ui";
import UserProfile from "./UserProfile";

const App = () => {
  const title = "Prop Drilling Example";

  return (
    <Layout title={title}>
      <UserProfile title={title} />
    </Layout>
  );
};

export default App;

