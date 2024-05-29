import React from "react";
import { useParams } from "react-router-dom";
import { usePlanetDetail } from "../../../data/queries";
import { Container } from "./Residents.styled";
import { THead, Table, Tr } from "../../../components/Table/Table.styled";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Th } from "../../../components/Table";
import {
	CarIcon,
	CoinsIcon,
	DateIcon,
	GenderIcon,
	ResidentIcon,
	RocketIcon,
} from "../../../assets/icons/Icons";

const Residents = () => {
	const { id } = useParams();

	const { data: details, isLoading } = usePlanetDetail(id);

	const { transactions, residents } = details ?? {};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<Container>
			<Table>
				<THead>
					<Tr>
						<Th icon={<ResidentIcon />}>Resident</Th>
						<Th icon={<DateIcon />}>Birth Year</Th>
						<Th icon={<GenderIcon />}>Gender</Th>
						<Th icon={<CarIcon />}>Vehicles</Th>
						<Th icon={<RocketIcon />}>Starships</Th>
						<Th icon={<CoinsIcon />}>Transactions</Th>
					</Tr>
				</THead>
				<tbody>
					{residents?.map((resident) => (
						<Tr key={resident.id}>
							<td>{resident.name}</td>
							<td>{resident.birth_year}</td>
							<td>{resident.gender}</td>
							<td>{resident.vehicles.length}</td>
							<td>{resident.starships.length}</td>
							<td>{transactions?.length}</td>
						</Tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Residents;
