import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlanetDetail from "../pages/PlanetDetail";
import Transactions from "../pages/PlanetDetail/Transactions";
import Residents from "../pages/PlanetDetail/Residents";
import PlanetList from "../pages/PlanetList";

export const routesConfig = [
	{
		path: "/",
		element: <PlanetList />,
	},
	{
		path: "/planet/:id",
		element: <PlanetDetail />,
		children: [
			{
				path: "transactions",
				element: <Transactions />,
			},
			{
				path: "residents",
				element: <Residents />,
			},
		],
	},
];

const router = createBrowserRouter(routesConfig);

const MainRouter = () => {
	return <RouterProvider router={router} />;
};

export default MainRouter;
