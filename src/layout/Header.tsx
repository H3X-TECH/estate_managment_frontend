import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@heroui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "~/stores/auth";
import { StyledButton } from "~/styled-components/StyledButton";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, userData, clearTokens } = useAuthStore();

  const handleLogout = () => {
    clearTokens();
    navigate("/auth/login");
  };

  return (
    <header className="bg-neutral-100 border-b backdrop-blur-md flex items-center">
      <div className="max-w-screen-xl px-4 py-2 flex items-center w-full mx-auto">
        <div className="flex items-center">
          {/* <House /> */}
          <h4 className="text-lg font-semibold tracking-wider">eainsharmal</h4>
        </div>
        <div className="flex items-center mx-auto gap-8">
          <NavLink to="/" className="hover:text-primary transition-colors">
            Explore
          </NavLink>
          <NavLink
            to="/add-listing"
            className="hover:text-primary transition-colors"
          >
            Sell
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
                <Avatar name={userData?.avatarUrl || userData?.firstName} />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="profile"
                  onPress={() => navigate("/profile")}
                >
                  Profile
                </DropdownItem>
                <DropdownItem key="logout" onPress={handleLogout}>
                  Logout
                </DropdownItem>
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
