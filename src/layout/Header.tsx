import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@heroui/react";
import { House } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { StyledButton } from "~/styled-components/StyledButton";

export default function Header() {
  const isLoggedIn = true;
  const navigate = useNavigate();

  return (
    <header className="py-4 bg-neutral-100 border-b backdrop-blur-md px-4 flex items-center">
      <div className="max-w-screen-xl flex items-center w-full mx-auto">
        <div className="flex items-center">
          <House />
          <h4 className="text-lg font-semibold tracking-wider">eainsharmal</h4>
        </div>
        <div className="flex items-center mx-auto gap-8">
          <NavLink to="/" className="hover:text-primary transition-colors">
            Explore
          </NavLink>
          <NavLink to="/" className="hover:text-primary transition-colors">
            Help
          </NavLink>
          <NavLink
            to="/search"
            className="hover:text-primary transition-colors"
          >
            About Us
          </NavLink>
        </div>
        <div>
          {isLoggedIn ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar name="H" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="profile"
                  onPress={() => navigate("/profile")}
                >
                  Profile
                </DropdownItem>
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
  );
}
