import Router from 'next/router';
import { Form, Formik } from 'formik';
import { ButtonSearchPrimary } from '../../ui/button/styled';
import { FieldSearch } from '../../ui/field/styled';
import { SearchIconLight } from '../../ui/icons/boxicons';

import * as yup from 'yup';

const initialValues = {
  search: '',
};

const schema = yup.object({
  search: yup.string().min(1).required(),
});

export const Searcher = () => {
  const onSearch = (path: string) => {
    Router.push(`/search/${path}`);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSearch(values.search)}
      validationSchema={schema}
    >
      {({ handleChange }) => (
        <Form className="form-control mr-2 self-center sm:w-full max-w-[500px] sm:flex relative">
          <FieldSearch
            type="text"
            placeholder="Search"
            onChange={handleChange}
            name="search"
            data-test="search-input"
          />

          <ButtonSearchPrimary
            type="submit"
            aria-label="button search"
            data-test="btn-search"
          >
            <SearchIconLight />
          </ButtonSearchPrimary>
        </Form>
      )}
    </Formik>
  );
};
