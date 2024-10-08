import { Outlet } from "react-router";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Link,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { StyledButton } from "~/styled-components/StyledButton";
import { useAuth } from "~/routes/ProtectedRoute";

const MainLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 m-2 bg-neutral-100 border rounded-xl backdrop-blur-md px-4 flex items-center">
        <h4 className="text-xl italic font-semibold tracking-wider">
          EasyRent
        </h4>
        <div className="flex items-center mx-auto gap-8">
          <NavLink to="/">Rent</NavLink>
          <NavLink to="/">Buy</NavLink>
          <NavLink to="/">Sell</NavLink>
          <NavLink to="/">Help</NavLink>
          <NavLink to="/search">Contact Us</NavLink>
        </div>
        <div>
          {isLoggedIn ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar name="H" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Message</DropdownItem>
                <DropdownItem>Wishlists</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <StyledButton as={Link} href="/auth/login">
              Login/Signup
            </StyledButton>
          )}
        </div>
      </header>
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
