export const OrdersWrapp = ({ children }: any) => {
  return (
    <div className="overflow-x-auto w-2/3">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Order Id</th>
            <th>Created at</th>
            <th>Status</th>
            <th>Link to Pay</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
