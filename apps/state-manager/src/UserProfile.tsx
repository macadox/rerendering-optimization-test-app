import React from "react";
import { Card, Input } from "ui";
import { useAppState } from "./store/useAppState";

const title = "State Manager Example";

const LocalCard = ({ title }: { title: string }) => {
  const name = useAppState((state) => state.name);
  const email = useAppState((state) => state.email);
  const address = useAppState((state) => state.address);

  return (
    <Card
      cardDetails={[
        `address: ${email}`,
        `Street: ${address.street}`,
        `Postal Code: ${address.postalCode}`,
      ]}
      cardMain={`Name: ${name}`}
      cardTitle={title}
    />
  );
};

const LocalNameInput = () => {
  const name = useAppState((state) => state.name);
  const setName = useAppState((state) => state.setName);

  return (
    <Input
      id='userame-state-manager'
      label='Username'
      value={name}
      onChange={setName}
    />
  );
};

const LocalIrrelevantTextInput = () => {
  const irrelevantText = useAppState((state) => state.irrelevantText);
  const setIrrelevantText = useAppState((state) => state.setIrrelevantText);

  return (
    <Input
      id='useless-text-state-manager'
      label='Another text'
      value={irrelevantText}
      onChange={setIrrelevantText}
    />
  );
};

export const UserProfile = () => (
  <>
    <div style={{ maxWidth: "420px", margin: "0 auto" }}>
      <LocalCard title={title} />
      <LocalNameInput />
      <LocalIrrelevantTextInput />
    </div>
    <div style={{ textAlign: "center" }}>
      <p>
        Nowadays, most of the state management libraries (at least
        reducer-based) use internal mechanisms that triggers re-renders only for
        the components that directly use the updated state. This results in
        efficient re-renders of only affected components.
      </p>
      <p>
        Since the data is memoized and can be accessed using selectors. Thus
        using only the pieces that are needed to be updated. Typing inside of
        LocalNameInput or LocalIrrelevantTextInput causes rerender only of the
        components, that select that piece of state. With smart selection of
        pieces of the states, we can almost completely get rid off unnecessary
        rerenders, as in this example.
      </p>
    </div>
  </>
);

