import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from '../../redux/currency/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handeleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.currency.value;
    const [amount, from, , to] = value.split(' ');
    dispatch(fetchExchangeCurrency({amount, from, to}));
  };
  return (
    <form className={styles.form} onSubmit={handeleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        type="text"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        className={styles.input}
        name="currency"
        required
      />
    </form>
  );
};
