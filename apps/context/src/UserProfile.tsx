import React from "react";
import { Card, Input } from "ui";
import { useAppContext } from "./contexts/AppContext";

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

