import { CardTitle } from 'ui/label/styled';

export const Featured = ({ children }: any) => {
  return (
    <section
      className="text-gray-600 body-font animate__animated animate__zoomIn"
      id="featured"
    >
      <div className="container  py-24 mx-auto ">
        <div className="flex justify-center text-center w-full mb-20">
          <CardTitle>Featured</CardTitle>
        </div>
        <div className="grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {children}
        </div>
      </div>
    </section>
  );
};
