import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PlanetList from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { makeServer } from "../../server";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import planets from "../../mockData/planets";

const queryClient = new QueryClient();

describe("Planet List", () => {
	let server: any;

	beforeEach(() => {
		server = makeServer();
	});

	afterEach(() => {
		server.shutdown();
	});

	test("should filter with text box", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<PlanetList />
				</MemoryRouter>
			</QueryClientProvider>
		);

		await waitFor(() => {
			const firstPlanetName = screen.getByText(planets[0].name);
			expect(firstPlanetName).toBeInTheDocument();
		});

		const planetToSearch = screen.queryByText("Mustafar");
		expect(planetToSearch).toBeNull();

		const input = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value: "must" } });
		expect(screen.getByText("Mustafar")).toBeInTheDocument();
	});

	test("should sort by name", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<PlanetList />
				</MemoryRouter>
			</QueryClientProvider>
		);

		await waitFor(() => {
			const firstPlanetName = screen.getByText(planets[0].name);
			expect(firstPlanetName).toBeInTheDocument();
		});

		const nameHeader = screen.getByText("Planet", { selector: "span" });

		await userEvent.click(nameHeader);
		await userEvent.click(nameHeader);

		await waitFor(() => {
			const lastPlanetName = screen.getByText(planets[planets.length - 1].name);
			expect(lastPlanetName).toBeInTheDocument();
		});
	});
});
