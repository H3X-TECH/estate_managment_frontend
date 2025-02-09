import { Outlet } from "react-router";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Link,
} from "@heroui/react";
import { NavLink } from "react-router-dom";
import { StyledButton } from "~/styled-components/StyledButton";

const MainLayout = () => {
  const isLoggedIn = false;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 bg-neutral-100 border-b backdrop-blur-md px-4 flex items-center">
        <div className="max-w-screen-xl flex items-center w-full mx-auto">
          <h4 className="text-lg font-semibold tracking-wider">eainsharmal</h4>
          <div className="flex items-center mx-auto gap-8">
            <NavLink to="/">Rent</NavLink>
            <NavLink to="/">Buy</NavLink>
            <NavLink to="/">Help</NavLink>
            <NavLink to="/search">About Us</NavLink>
          </div>
          <div>
            {isLoggedIn ? (
              <Dropdown>
                <DropdownTrigger>
                  <Avatar name="H" />
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="profile">Profile</DropdownItem>
                  <DropdownItem key="logout">Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <StyledButton as={Link} href="/auth/login">
                Login/Signup
              </StyledButton>
            )}
          </div>
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
