import { Resident } from "./Resident";
import { Transaction } from "./Transaction";

export type Planet = {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: Resident[];
	films: string[];
	created: string;
	edited: string;
	id: string;
	transactions: Transaction[];
};
