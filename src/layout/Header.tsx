import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { House } from "lucide-react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetcher } from "~/lib/fetcher";
import type { ApiResponse } from "~/models/shared";
import { useAuthStore } from "~/stores/auth";
import { StyledButton } from "~/styled-components/StyledButton";

const useGetUserProfile = () => {
  return useQuery<ApiResponse<any>>({
    queryKey: ["user-profile"],
    queryFn: () => {
      return fetcher("get", "/user/profile");
    },
  });
};

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, userData, clearTokens, setUserData } = useAuthStore();
  const { data } = useGetUserProfile();

  const handleLogout = () => {
    clearTokens();
    navigate("/auth/login");
  };

  useEffect(() => {
    if (data?.data) {
      setUserData(data.data);
    }
  }, [data, setUserData]);

  return (
    <header className="py-4 bg-neutral-100 border-b backdrop-blur-md px-4 flex items-center">
      <div className="max-w-screen-xl flex items-center w-full mx-auto">
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
