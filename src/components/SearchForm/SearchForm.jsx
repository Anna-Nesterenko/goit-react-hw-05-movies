export function SearchForm({ onSubmitForm }) {
  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" name="searchQuery" />

      <button type="submit">Search</button>
    </form>
  );
}
