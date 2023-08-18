import React from "react";
import { Card, Input } from "ui";
import { AppContextProvider, useAppContext } from "./contexts/AppContext";

const title = "App Context Example";

const LocalCard = ({ title }: { title: string }) => {
  const { email, address, name } = useAppContext();

  return (
    <Card
      cardDetails={[
        `Email: ${email}`,
        `Street: ${address.street}`,
        `Postal Code: ${address.postalCode}`,
      ]}
      cardMain={`Name: ${name}`}
      cardTitle={title}
    />
  );
};

const LocalNameInput = () => {
  const { name, setName } = useAppContext();

  return (
    <Input
      id='username-context'
      label='Username'
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
};

const LocalIrrelevantTextInput = () => {
  const { irrelevantText, setIrrelevantText } = useAppContext();

  return (
    <Input
      id='useless-text-context'
      label='Another text'
      value={irrelevantText}
      onChange={(e) => setIrrelevantText(e.target.value)}
    />
  );
};

export const UserProfile = () => {
  return (
    <>
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <LocalCard title={title} />
        <LocalNameInput />
        <LocalIrrelevantTextInput />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          In this approach, one creates a context provider to manage the state
          and provide it to components via AppContext. When the context&apos;s
          state changes, any component that consumes the context and uses the
          updated state will re-render. This can be more efficient than prop
          drilling since only components using the updated state will re-render.
        </p>
        <p>
          Since both LocalCard, LocalNameInput, LocalIrrelevantTextInput are
          calling the useAppContext hook, and change in the state located in the
          AppContext causes rerenders all over the place.
        </p>
        <p>
          This could be improved by segregation of the context, in such a way,
          that it wraps only elements that consume it (We need multiple
          contexts). We could also optimize the components rerendering with
          usage of React.memo and useMemo, useCallback hooks.
        </p>
      </div>
    </>
  );
};

export const UserProfileWithContext = () => (
  <AppContextProvider>
    <UserProfile />
  </AppContextProvider>
);

