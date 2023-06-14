import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { Container } from './Container';
import { Form } from './Form';
import {Contacts} from './Contacts'

class App extends Component {
  state = {
  contacts: [],
  }
  addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    }
    
    const inList = this.state.contacts.some(contact => contact.name === newContact.name);

    if (inList) {
      alert(`${newContact.name} is already in your list`);
      return; 
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts, ]
    }))
  }
  deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }
  render() {
    const {contacts} = this.state
    return (
       <Container>
          <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <Contacts contacts={contacts} handleDelete={this.deleteContact}></Contacts>   
    </Container>
       
  );
  }
 
};
export { App };