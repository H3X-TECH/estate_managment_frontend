import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <div>Home Page</div>,
			},
			{
				path: "/search",
				element: <div>Search Page</div>,
			},
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
