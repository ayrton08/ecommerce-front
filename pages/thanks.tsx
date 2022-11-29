import { Header } from "components";
import { Payment } from "ui";

export default function thanks() {
  return (
    <div className="flex flex-col screen justify-center self-center items-center relative">
      <div className="fixed top-4 w-full px-4">
        <Header />
      </div>
      <Payment />
    </div>
  );
}
