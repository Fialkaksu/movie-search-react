import { HiSearch } from 'react-icons/hi';
import { toastError } from '@utils/toast';
import css from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value.trim();
    if (query === '') {
      toastError('Please enter a search query');
    }
    onSearch(query);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="query" autoComplete="off" autoFocus placeholder="Search movies" className={css.input} />
      <button type="submit" className={css.button}>
        <HiSearch />
      </button>
    </form>
  );
};

export default SearchBox;