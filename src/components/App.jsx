import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleAddContact = newContact => {
    const isDuplicate = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { ...newContact, id: `id-${prevState.contacts.length + 1}` },
        ],
      }));
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>My Phonebook</h1>
        <div className="addformula">
          <ContactForm onAddContact={this.handleAddContact} />
          <label className="filterinput">
            <span className="filtername">Filter by Name:</span>
            <input
              className="filter-searchbar"
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </label>
        </div>

        <h2>Contacts:</h2>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
