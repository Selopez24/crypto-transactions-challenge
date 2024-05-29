import {
	BackIcon,
	ClimateIcon,
	DiameterIcon,
	GravityIcon,
	OrbitIcon,
	PeopleIcon,
	ResidentIcon,
	RotateIcon,
	TerrainIcon,
	TransactionsIcon,
	WaterIcon,
} from "../../../assets/icons/Icons";
import DetailCard from "../../../components/DetailCard";
import { Planet } from "../../../types/Planet";
import {
	DetailsContainer,
	Header,
	PlanetName,
	StyledLink,
} from "./PlanetDetailHeader.styled";

type Props = {
	detail: Planet | null;
};

const PlanetDetailHeader = ({ detail }: Props) => {
	return (
		<Header>
			<div>
				<StyledLink to="/">
					<BackIcon />
					Galaxy Dashboard
				</StyledLink>
			</div>
			<div>
				<PlanetName>{detail?.name}</PlanetName>
			</div>
			<DetailsContainer>
				<DetailCard
					label="Transactions"
					value={detail?.transactions.length}
					icon={<TransactionsIcon />}
				/>
				<DetailCard
					label="Population"
					value={detail?.population}
					icon={<PeopleIcon />}
				/>
				<DetailCard
					label="Residents"
					value={detail?.residents.length}
					icon={<ResidentIcon />}
				/>
				<DetailCard
					label="Terrain"
					value={detail?.terrain}
					icon={<TerrainIcon />}
				/>
				<DetailCard
					label="Climate"
					value={detail?.climate}
					icon={<ClimateIcon />}
				/>
				<DetailCard
					label="Gravity"
					value={detail?.gravity}
					icon={<GravityIcon />}
				/>
				<DetailCard
					label="Diameter"
					value={detail?.diameter}
					icon={<DiameterIcon />}
				/>
				<DetailCard
					label="Surface Water"
					value={detail?.surface_water}
					icon={<WaterIcon />}
				/>
				<DetailCard
					label="Orbital Period"
					value={detail?.orbital_period}
					icon={<OrbitIcon />}
				/>
				<DetailCard
					label="Rotation Period"
					value={detail?.rotation_period}
					icon={<RotateIcon />}
				/>
			</DetailsContainer>
		</Header>
	);
};

export default PlanetDetailHeader;
