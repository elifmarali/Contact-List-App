import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "ElifC",
      phone_number: "123",
    },
    {
      fullname: "YunusAbc",
      phone_number: "345",
    },
    {
      fullname: "Abc",
      phone_number: "567",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}
export default Contacts;
