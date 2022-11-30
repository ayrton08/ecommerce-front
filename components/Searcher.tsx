import { Form, Formik } from "formik";
import Router from "next/router";
import { ButtonSearchPrimary } from "../ui/button/Button";
import { FieldSearch } from "../ui/field/styled";
import { SearchIconLight } from "../ui/icons/boxicons";
const initialValues = {
  search: "",
};

export const Searcher = () => {
  const handler = (path: string) => {
    Router.push({
      pathname: "/search",
      query: { q: path },
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handler(values.search)}
    >
      {({ handleChange }) => (
        <Form className="form-control mr-2 self-center sm:w-1/2 max-w-[450px]  sm:flex relative">
          <FieldSearch
            type="text"
            placeholder="Search"
            onChange={handleChange}
            name="search"
          />

          <ButtonSearchPrimary type="submit" aria-label="button search">
            <SearchIconLight />
          </ButtonSearchPrimary>
        </Form>
      )}
    </Formik>
  );
};
