import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { makeServer } from "../../server";
import "@testing-library/jest-dom";

import planets from "../../mockData/planets";
import { routesConfig } from "../../routers/MainRouter";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("Planet Detail", () => {
	let server: any;

	beforeEach(() => {
		server = makeServer();
	});

	afterEach(() => {
		server.shutdown();
	});

	test("should render correct planet", async () => {
		const firstPlanet = planets[0];

		const router = createMemoryRouter(routesConfig, {
			initialEntries: [`/planet/${firstPlanet.id}/transactions`],
		});
		render(
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		);

		await waitFor(() => {
			const firstPlanetName = screen.getByText(firstPlanet.name);
			expect(firstPlanetName).toBeInTheDocument();
		});
	});

	test("should filter by currency", async () => {
		const firstPlanet = planets[0];

		const router = createMemoryRouter(routesConfig, {
			initialEntries: [`/planet/${firstPlanet.id}/transactions`],
		});
		render(
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		);

		await waitFor(() => {
			const firstPlanetName = screen.getByText(firstPlanet.name);
			expect(firstPlanetName).toBeInTheDocument();
		});

		const GCSFilter = screen.getByRole("button", {
			name: "GCS Galactic Credit Standard",
		});
		const ICSFilter = screen.getByRole("button", {
			name: "ICS Imperial Crown Standard",
		});
		const NoneFilter = screen.getByRole("button", { name: "None" });

		expect(
			screen.getAllByRole("cell", { name: "ICS" }).length
		).toBeGreaterThanOrEqual(1);
		expect(
			screen.getAllByRole("cell", { name: "GCS" }).length
		).toBeGreaterThanOrEqual(1);

		await userEvent.click(GCSFilter);

		await waitFor(() => {
			expect(
				screen.getAllByRole("cell", { name: "GCS" }).length
			).toBeGreaterThanOrEqual(0);
		});

		await userEvent.click(ICSFilter);

		await waitFor(() => {
			expect(
				screen.getAllByRole("cell", { name: "ICS" }).length
			).toBeGreaterThanOrEqual(0);
		});

		await userEvent.click(NoneFilter);

		await waitFor(() => {
			expect(
				screen.getAllByRole("cell", { name: "ICS" }).length
			).toBeGreaterThanOrEqual(1);
		});

		await waitFor(() => {
			expect(
				screen.getAllByRole("cell", { name: "GCS" }).length
			).toBeGreaterThanOrEqual(1);
		});
	});
});
