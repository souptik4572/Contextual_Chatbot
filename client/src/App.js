import { ThemeProvider as ThemeProvider2 } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import Stocks from './pages/Stocks';
import MutualFunds from './pages/MutualFunds';
import FixedDeposits from './pages/FixedDeposits';
import USStocks from './pages/USStocks';
import Chatbot from './pages/Chatbot';
import Test from './testing/Test';

let theme = createTheme({
	palette: {
		primary: {
			main: 'hsl(165, 100%, 41%)',
			light: 'hsl(165, 100%, 51%)',
			dark: 'hsl(165, 100%, 21%)',
		},
		secondary: {
			main: '#fff',
			light: '',
			dark: '',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'hsl(165, 100%, 41%)',
					color: '#fff',
				},
			},
		},
	},

	// chatbot
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: 'hsl(165, 100%, 41%)',
	headerFontColor: '#fff',
	headerFontSize: '16px',
	botBubbleColor: 'hsl(165, 100%, 41%)',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: 'hsla(10, 10%, 10%, 1)',
});

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Test />
			</header>
		</div>
		// <ThemeProvider theme={theme}>
		//   <BrowserRouter>
		//     <Routes>
		//       <Route path="/" element={<LandingPage />} />
		//       <Route path="/stocks" element={<Stocks />} />
		//       <Route path="/mutual-funds" element={<MutualFunds />} />
		//       <Route path="/fixed-deposit" element={<FixedDeposits />} />
		//       <Route path="/us-stocks" element={<USStocks />} />
		//       <Route path="/products" element={<ProductsPage />} />
		//     </Routes>
		//   </BrowserRouter>
		//   <ThemeProvider2 theme={theme}>
		//     <Chatbot />
		//   </ThemeProvider2>
		// </ThemeProvider>
	);
}

export default App;
