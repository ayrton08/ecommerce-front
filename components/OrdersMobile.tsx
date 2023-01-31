import { CardTitle, Label } from "ui/label/styled";
import { ContainerCard } from "ui/wrappers/styled";

export const OrdersMobile = ({ children }: any) => {
  return (
    <div className="md:hidden overflow-x-auto flex-col w-full md:w-3/4 lg:w-2/3 animate__animated animate__fadeIn self-center mt-8 mb-48 order">
      <table className="table w-full text-black">
        <thead>
          <tr>
            <th style={{ color: "black" }}>Created at</th>
            <th>Status</th>
            <th>Link to Pay</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
