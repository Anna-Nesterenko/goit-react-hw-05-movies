import { ButtonBackTo } from 'components';
import { Field, BtnSearch, Form, WrapperForm } from './SearchForm.styled';
import { FiSearch } from 'react-icons/fi';

export function SearchForm({ onSubmitForm }) {
  return (
    <WrapperForm>
      <ButtonBackTo />

      <Form onSubmit={onSubmitForm}>
        <Field
          type="text"
          name="query"
          placeholder="Enter the name's search..."
        />
        <BtnSearch type="submit">
          <FiSearch style={{ marginTop: 3 }}></FiSearch>
        </BtnSearch>
      </Form>
    </WrapperForm>
  );
}
