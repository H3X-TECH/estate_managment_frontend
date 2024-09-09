import { Outlet } from "react-router";

const MainLayout = () => {
	return (
		<div>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
