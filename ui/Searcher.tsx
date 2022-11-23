import { Form, Formik } from "formik";

export const Searcher = ({ handler, initialValues }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handler(values.search)}
    >
      {({ handleChange }) => (
        <Form className="form-control  self-center w-1/2 max-w-[450px] hidden sm:flex relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full"
            onChange={handleChange}
            name="search"
          />
          <button className="btn-search" type="submit">
            <i
              className="bx bx-search bx-sm mt-1"
              style={{ color: "#f1f3ed" }}
            ></i>
          </button>
        </Form>
      )}
    </Formik>
  );
};
