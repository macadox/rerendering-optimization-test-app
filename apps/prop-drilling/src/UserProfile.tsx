import React, { useState } from "react";
import { Card, Input } from "ui";

const UserProfile = ({ title }: { title: string }) => {
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
          method is run. Thus rerendering the child components.
        </p>
        <p>
          Here by typing values in `Another Text` Field, we are updating the
          UserProfile state. This action rerenders the Card component, which
          does not share the state with the `Another Text` Field.
        </p>
      </div>
    </>
  );
};

export default UserProfile;

