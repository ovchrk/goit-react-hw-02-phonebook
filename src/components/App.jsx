import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { Container } from './Container';
import { Form } from './Form';
import { Filter } from './Filter';
import { List } from './List';

class App extends Component {
  state = {
    contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', gender: 'female' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', gender: 'female' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79', gender: 'male' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', gender: 'female' },],
    filter: "",
  }
  
  addContact = ({name, number, gender}) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
      gender: gender,
    }
    
    const inList = this.state.contacts.some(contact => contact.name === newContact.name);

    if (inList) {
      alert(`${newContact.name}  is already in contacts.`);
      return; 
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts, ]
    }))
  }

  filterOnChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }

  render() {
    const { contacts, filter } = this.state
    const filteredContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
       <Container>
          <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterOnChange} ></Filter>
        <List filteredContacts={filteredContacts} handleDelete={this.deleteContact}></List>
    </Container> 
  );
  }
 
};
export { App };