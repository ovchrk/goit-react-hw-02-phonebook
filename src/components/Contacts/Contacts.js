import React, { Component } from 'react';

import css from '../Contacts/Contacts.module.css';

class Contacts extends Component {
  state = {
    filter: '',
  };
  handleChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;
    const { contacts, handleDelete } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={css.box}>
        {filteredContacts.length > 0 ? (
          <div>
            <h2>Contacts</h2>
            <label>
              Find contacts by name: <br></br>
              <input
                className={css.input}
                type="text"
                name="filter"
                value={filter}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
        ) : (
          <div className={css.empty}>Your phonebook is empty</div>
        )}

        {/* <List filteredContacts={filteredContacts}></List> */}
        <ul className={css.contacts}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={css.contacts__item}>
              &#8728; {contact.name}: {contact.number}{' '}
              <button
                type="button"
                className={css.button}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export { Contacts };
