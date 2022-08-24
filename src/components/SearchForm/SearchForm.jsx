import { ButtonBackTo } from 'components';

export function SearchForm({ onSubmitForm }) {
  return (
    <>
      <ButtonBackTo />
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="query"
          placeholder="Enter the name's search..."
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}
