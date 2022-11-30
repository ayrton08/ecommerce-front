import NotFound from "./404.svg";
import Avatar from "./avatar.svg";
import Login from "./login.svg";
import Logo from "./logo.svg";
import Payment from "./payment.svg";
import Cart from "./cart-logo.svg";
import Computer from "./tecs/computer.svg";
import Home from "./home.svg";
import Results from "./no-results.svg";
import Visa from "./visa.svg";
import Master from "./master.svg";
import MercadoPago from "./mp.svg";
import Cash from "./cash.svg";

const CashIcon = ({ className }: any) => {
  return <Cash className={className} />;
};

const MercadoPagoIcon = ({ className }: any) => {
  return <MercadoPago className={className} />;
};

const MasterIcon = ({ className }: any) => {
  return <Master className={className} />;
};
const VisaIcon = ({ className }: any) => {
  return <Visa className={className} />;
};
const NoResultsIcons = ({ className }: any) => {
  return <Results className={className} />;
};
const HomeIcon = ({ className }: any) => {
  return <Home className={className} />;
};
const NotFoundIcon = ({ className }: any) => {
  return <NotFound className={className} />;
};

const ComputerIcon = ({ className }: any) => {
  return <Computer className={className} />;
};

const AvatarIcon = ({ className }: any) => {
  return <Avatar className={className} />;
};

const LoginIcon = ({ className }: any) => {
  return <Login className={className} />;
};

const LogoIcon = ({ className }: any) => {
  return <Logo className={className} />;
};

const PaymentIcon = ({ className }: any) => {
  return <Payment className={className} />;
};

const CartLogo = ({ className }: any) => {
  return <Cart className={className} />;
};

const MenuIcon = ({ className }: any) => {
  return (
    <label htmlFor="my-modal-3" className="btn btn-circle swap swap-rotate">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />

      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};

export {
  AvatarIcon,
  CartLogo,
  ComputerIcon,
  HomeIcon,
  LoginIcon,
  LogoIcon,
  MasterIcon,
  MenuIcon,
  MercadoPagoIcon,
  NoResultsIcons,
  NotFoundIcon,
  PaymentIcon,
  VisaIcon,
  CashIcon,
};
