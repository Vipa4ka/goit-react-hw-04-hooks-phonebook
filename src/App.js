import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./component/ContactForm";
import Filter from "./component/Filter";
import ContactList from "./component/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (text, tel) => {
    const contactsId = uuidv4();
    const add = {
      id: contactsId,
      name: text,
      number: tel,
    };

    if (contacts.find((contact) => contact.name === add.name)) {
      alert(`${add.name} is already in contacts!`);
      return;
    }

    setContacts((prevState) => [add, ...prevState]);
  };

  const deleteContacts = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getvisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getvisibleContacts}
          onDeleteContacts={deleteContacts}
        />
      </div>
    </>
  );
}
