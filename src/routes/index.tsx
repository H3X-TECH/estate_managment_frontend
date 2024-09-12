import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		caseSensitive: true,

		children: [
			{
				index: true,
				element: <HomePage />,
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
