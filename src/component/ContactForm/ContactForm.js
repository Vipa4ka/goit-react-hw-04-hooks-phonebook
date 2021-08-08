import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleTElChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const nameInputId = uuidv4();
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor={nameInputId}>
            Name{" "}
            <input
              className={styles.input}
              type="text"
              name="name"
              value={this.state.name}
              id={nameInputId}
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.label} htmlFor={uuidv4()}>
            Number{" "}
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleTElChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
