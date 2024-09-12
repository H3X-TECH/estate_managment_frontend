import { Outlet } from "react-router";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
} from "@nextui-org/react";

const MainLayout = () => {
	return (
		<div>
			<header className="py-4 border-b px-4 flex items-center  justify-between">
				<h4 className="text-xl italic font-semibold">EasyRent</h4>
				<div>
					<Dropdown>
						<DropdownTrigger>
							<Avatar name="H" />
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem>Profile</DropdownItem>
							<DropdownItem>Message</DropdownItem>
							<DropdownItem>Wishlists</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</header>
			<Outlet />
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
