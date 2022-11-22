import { filterContact } from '../../Redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.contactsReducer.filter);
  const dispatch = useDispatch();

  const changeFilter = data => {
    dispatch(filterContact(data));
  };

  return (
    <label className={styles.filter_label}>
      Filter names
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name"
        value={filter}
        className={styles.filter_input}
        onChange={e => changeFilter(e.target.value)}
      />
    </label>
  );
}
