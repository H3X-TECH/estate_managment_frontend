import { Outlet } from "react-router";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { StyledButton } from "~/styled-components/StyledButton";

const AuthLayout = () => {
  return (
    <div className="hero-pattern-one flex flex-col min-h-screen">
      <header className="py-4 m-2 bg-neutral-100 border rounded-xl backdrop-blur-md px-4 flex items-center justify-between">
        <h4 className="text-xl italic font-semibold tracking-wider">
          EasyRent
        </h4>
        {/* <div className="flex items-center mx-auto gap-8">
          <NavLink to="/">Rent</NavLink>
          <NavLink to="/">Buy</NavLink>
          <NavLink to="/">Sell</NavLink>
          <NavLink to="/">Help</NavLink>
          <NavLink to="/">Contact Us</NavLink>
        </div> */}
        <div>
          <StyledButton>Login/SignUp</StyledButton>
        </div>
      </header>
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default AuthLayout;
