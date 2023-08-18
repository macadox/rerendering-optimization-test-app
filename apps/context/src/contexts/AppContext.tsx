import React, { useState, useContext } from "react";

const AppContext = React.createContext<{
  name: string;
  setName: React.Dispatch<string>;
  email: string;
  address: { street: string; postalCode: string };
  irrelevantText: string;
  setIrrelevantText: React.Dispatch<string>;
}>({
  name: "",
  setName: () => {},
  email: "",
  address: { street: "", postalCode: "" },
  irrelevantText: "",
  setIrrelevantText: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("Maciek");
  const [email] = useState("macadox@gmail.com");
  const [address] = useState({
    street: "Trocinowa 44",
    postalCode: "04-929",
  });

  // Irrelevant text for the User Card
  const [irrelevantText, setIrrelevantText] = useState("");

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        email,
        address,
        irrelevantText,
        setIrrelevantText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

