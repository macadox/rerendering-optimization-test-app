import React from "react";
import { Layout } from "ui";
import UserProfile from "./UserProfile";
import { AppContextProvider } from "./contexts/AppContext";

const App = () => {
  const title = "App Context Example";

  return (
    <Layout title={title}>
      <UserProfile title={title} />
    </Layout>
  );
};

const AppWithContext = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

export default AppWithContext;

