import styles from './App.module.css';
import ContactList from './contactList/ContactList.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import Filter from './filter/Filter.jsx';

export default function App() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};
