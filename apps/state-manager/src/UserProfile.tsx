import React from "react";
import { Card, Input } from "ui";
import { useAppState } from "./store/useAppState";

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

const UserProfile = ({ title }: { title: string }) => {
  return (
    <>
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <LocalCard title={title} />
        <LocalNameInput />
        <LocalIrrelevantTextInput />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam libero
          fugit? Dolorum numquam molestiae, distinctio repudiandae quos eum
          magni hic sunt soluta earum dicta, labore quidem officia, repellendus
          vero commodi nihil minima necessitatibus officiis nostrum. Natus, qui
          exercitationem laborum quia doloremque quisquam cum recusandae? Dicta
          soluta asperiores ipsam architecto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem
          dignissimos! Magni aliquam facilis architecto tenetur, nesciunt
          placeat quo, excepturi aspernatur asperiores, quam necessitatibus
          voluptatem autem molestias est maiores adipisci.
        </p>
      </div>
    </>
  );
};

export default UserProfile;

