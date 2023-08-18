import React, { useState } from "react";
import { Card, Input } from "ui";

const title = "Prop Drilling Example";

export const UserProfile = () => {
  const [name, setName] = useState("Maciek");
  const [email] = useState("macadox@gmail.com");
  const [address] = useState({
    street: "Trocinowa 44",
    postalCode: "04-929",
  });

  // Irrelevant text for the User Card
  const [irrelevantText, setIrrelevantText] = useState("");

  return (
    <>
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <Card
          cardDetails={[
            `Email: ${email}`,
            `Street: ${address.street}`,
            `Postal Code: ${address.postalCode}`,
          ]}
          cardMain={`Name: ${name}`}
          cardTitle={title}
        />
        <Input
          id='username-prop-drilling'
          label='Username'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          id='useless-text-prop-drilling'
          label='Another text'
          value={irrelevantText}
          onChange={(e) => setIrrelevantText(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Prop drilling is a situation when the same data is being sent at
          almost every level due to requirements in the final level. When you
          call a state update hook, this (apart from a lot of things that are
          done under the hood about DOM and Virtual DOM). Forces the whole
          component to rerender. This means that the component&apos;s render
          method is run. Even if only one piece of data changes, all components
          that consume it will re-render.
        </p>
        <p>
          Here by typing values in `Input` Field for `Another Text`, we are
          updating the UserProfile state. This action rerenders the Card
          component, which does not share the state with the `Input` Field for
          `Another Text`.
        </p>
      </div>
    </>
  );
};

