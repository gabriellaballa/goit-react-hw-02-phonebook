import { Component } from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import style from './ContactList.module.css';
class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ol className={style.contacts}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ol>
    );
  }
}
export default ContactList;
