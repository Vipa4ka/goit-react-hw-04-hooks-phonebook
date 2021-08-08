import React from "react";
import PropTypes from "prop-types";
import styles from "./ElContactList.module.scss";

const ElContactList = ({ contact, onDeleteContacts }) => (
  <>
    <span className={styles.span}>
      {contact.name}: {contact.number}
    </span>
    <button
      className={styles.button}
      onClick={() => onDeleteContacts(contact.id)}
    >
      {" "}
      Delete{" "}
    </button>
  </>
);

ElContactList.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,

  onDeleteContacts: PropTypes.func.isRequired,
};

export default ElContactList;
