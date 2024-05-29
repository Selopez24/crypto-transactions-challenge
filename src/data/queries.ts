import axios from "axios";
import { QueryFunctionContext, UseQueryOptions, useQuery } from "react-query";
import { Planet } from "../types/Planet";

async function fetchPlanetList() {
	return axios.get("/api/planets");
}

async function fetchPlanetDetail({ queryKey }: QueryFunctionContext) {
	const [, id] = queryKey;
	return axios.get(`/api/planets/${id}`);
}

export function usePlanetList(options?: UseQueryOptions): {
	data: Array<Planet>;
	isLoading: boolean;
	isError: boolean;
} {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["planets"],
		queryFn: fetchPlanetList,
		enabled: options?.enabled,
	});

	return { data: data?.data.planets, isLoading, isError };
}

export function usePlanetDetail(id: string | undefined): {
	data: Planet | null;
	isLoading: boolean;
	isError: boolean;
} {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["planets", id],
		queryFn: fetchPlanetDetail,
	});

	return { data: data?.data.planet, isLoading, isError };
}
