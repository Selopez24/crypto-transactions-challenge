import { usePlanetList } from "../../data/queries";
import { ChangeEvent, useEffect, useState } from "react";
import {
	DashboardCardsContainer,
	InputContainer,
	PageWrapper,
	TableWrapper,
	TitleContainer,
} from "./PlanetList.styled";
import { useNavigate } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSort } from "../../hooks/useSort";
import { SortableHeader, THead, Table, Th } from "../../components/Table";
import { Tr } from "../../components/Table/Table.styled";
import DetailCard from "../../components/DetailCard";
import {
	ClimateIcon,
	CoinsIcon,
	PeopleIcon,
	PlanetIcon,
	ResidentIcon,
	TerrainIcon,
	WaterIcon,
} from "../../assets/icons/Icons";
import InputSearch from "../../components/InputSearch";
import PaginationFooter from "../../components/Table/PaginationFooter";

const Home = () => {
	const { data: planetList, isLoading } = usePlanetList();

	const navigate = useNavigate();

	const [filteredPlanets, setFilteredPlanets] = useState(planetList);
	const [searchValue, setSearchValue] = useState("");

	const { sortData, sortDirection, sortedData } = useSort(filteredPlanets);

	const {
		dataToDisplay,
		nextPage,
		previousPage,
		currentPage,
		totalDisplayedData,
		totalData,
		resetPagination,
	} = usePagination(sortedData);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		resetPagination();
		const value = event.target.value;
		setSearchValue(value);
		const filteredPlanets = planetList?.filter((planet) =>
			planet.name.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredPlanets(filteredPlanets);
	};

	const handleGoToPlanetDetail = (id: string) => {
		navigate(`/planet/${id}`);
	};

	const handleSort = () => sortData("name");

	useEffect(() => {
		if (!isLoading) {
			setFilteredPlanets(planetList);
		}
	}, [isLoading, planetList]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<PageWrapper>
			<TitleContainer>
				<h1>Galaxy Dashboard</h1>
			</TitleContainer>
			<DashboardCardsContainer>
				<DetailCard label="Transactions" value={1000} icon={<CoinsIcon />} />
				<DetailCard label="Population" value={12320000} icon={<PeopleIcon />} />
				<DetailCard label="Residents" value={83} icon={<ResidentIcon />} />
				<DetailCard
					label="Planets"
					value={planetList.length}
					icon={<PlanetIcon />}
				/>
			</DashboardCardsContainer>
			<InputContainer>
				<InputSearch
					placeholder="Search Planet"
					onChange={handleSearch}
					value={searchValue}
				/>
			</InputContainer>
			<TableWrapper>
				<Table>
					<THead>
						<Tr>
							<SortableHeader
								icon={<PlanetIcon />}
								label="Planet"
								sortDirection={sortDirection}
								onClick={handleSort}
							/>
							<Th $fixedWith={"120px"} icon={<WaterIcon />}>
								Surf. Water
							</Th>
							<Th icon={<TerrainIcon />}>Terrain</Th>
							<Th icon={<ClimateIcon />}>Climate</Th>
							<Th icon={<PeopleIcon />}>Pop. Density</Th>
							<Th icon={<ResidentIcon />}>Residents</Th>
							<Th icon={<CoinsIcon />}>Transactions</Th>
						</Tr>
					</THead>
					<tbody>
						{dataToDisplay?.map((planet) => (
							<Tr
								key={planet.id}
								onClick={() => handleGoToPlanetDetail(planet.id)}
							>
								<td>{planet.name}</td>
								<td>{planet.surface_water}</td>
								<td>{planet.terrain}</td>
								<td>{planet.climate}</td>
								<td>
									{isNaN(Number(planet.population) / Number(planet.diameter))
										? "- "
										: Number(planet.population) / Number(planet.diameter)}
								</td>
								<td>{planet.residents.length}</td>
								<td>{planet.transactions.length}</td>
							</Tr>
						))}
					</tbody>
				</Table>
			</TableWrapper>
			<PaginationFooter
				totalDisplayed={totalDisplayedData}
				totalData={totalData}
				currentPage={currentPage}
				nextPage={nextPage}
				previousPage={previousPage}
			/>
		</PageWrapper>
	);
};

export default Home;
