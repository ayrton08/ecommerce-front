import { CardTitle } from "ui/label/styled";

export const Featured = ({ children }: any) => {
  return (
    <section
      className="text-gray-600 body-font animate__animated animate__zoomIn"
      id="featured"
    >
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex justify-center text-center w-full mb-20">
          <CardTitle>Featured</CardTitle>
        </div>
        <div className="flex flex-wrap -m-4  justify-center ">{children}</div>
      </div>
    </section>
  );
};
