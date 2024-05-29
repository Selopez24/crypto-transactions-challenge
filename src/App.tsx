import { QueryClient, QueryClientProvider } from "react-query";
import MainRouter from "./routers/MainRouter";
import { createGlobalStyle } from "styled-components";
import img from "./assets/background/stars.png";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  body {
    background-color: #111624;
    color: white;
    font-family: "Urbanist", sans-serif;
		overflow-x: hidden;
		padding: 0 12px;
		background-image: url(${img});
		background-attachment:fixed;
    background-repeat: no-repeat;
		background-size: 100% 100%;



  }

	html {
		overflow-x: hidden;
	}

`;

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MainRouter />
			<GlobalStyle />
		</QueryClientProvider>
	);
};

export default App;
