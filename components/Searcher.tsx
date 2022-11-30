import { Form, Formik } from "formik";
import { ButtonSearchPrimary } from "../ui/button/Button";
import { FieldSearch } from "../ui/field/styled";
import { SearchIcon } from "../ui/icons/SearchIcon";

export const Searcher = ({ handler, initialValues }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handler(values.search)}
    >
      {({ handleChange }) => (
        <Form className="form-control  self-center w-1/2 max-w-[450px] hidden sm:flex relative">
          <FieldSearch
            type="text"
            placeholder="Search"
            onChange={handleChange}
            name="search"
          />

          <ButtonSearchPrimary type="submit" aria-label="button search">
            <SearchIcon />
          </ButtonSearchPrimary>
        </Form>
      )}
    </Formik>
  );
};
