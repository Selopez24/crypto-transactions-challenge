import { useEffect } from "react";
import { usePlanetDetail } from "../../data/queries";
import { useNavigate, useParams } from "react-router-dom";
import { PlanetDetailWrapper } from "./PlanetDetail.styled";
import PlanetDetailHeader from "./PlanetDetailHeader";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tabs/Tab";
import LoadingSpinner from "../../components/LoadingSpinner";

const TABS = [
	{
		label: "Transactions",
		path: "transactions",
	},
	{
		label: "Residents",
		path: "residents",
	},
];

const PlanetDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: detail, isLoading } = usePlanetDetail(id);

	useEffect(() => {
		if (detail && !isLoading) {
			navigate(TABS[0].path);
		}
	}, [isLoading, detail, navigate]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<PlanetDetailWrapper>
			<PlanetDetailHeader detail={detail} />
			<Tabs>
				{TABS.map((tab) => (
					<Tab label={tab.label} path={tab.path} key={tab.path} />
				))}
			</Tabs>
		</PlanetDetailWrapper>
	);
};

export default PlanetDetail;
