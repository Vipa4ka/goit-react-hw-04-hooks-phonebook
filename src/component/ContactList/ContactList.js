import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

import ElContactList from "../ElContactList";

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={styles.ul}>
    {contacts.map((contact) => (
      <li className={styles.li} key={contact.id}>
        <ElContactList contact={contact} onDeleteContacts={onDeleteContacts} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
