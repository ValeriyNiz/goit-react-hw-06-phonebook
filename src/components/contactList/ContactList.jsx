import { deleteContact } from '../../Redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state =>
    state.contactsReducer.items.filter(contact =>
      contact.name.toLowerCase().includes(state.contactsReducer.filter)
    )
  );
  const dispatch = useDispatch();

  const deleteContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.contactList_item}>
            <p className={styles.item_text}>
              {contact.name}:{' '}
              <span className={styles.item_span}>{contact.number}</span>
            </p>
            <button
              type="button"
              className={styles.item_btn}
              onClick={() => deleteContacts(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
