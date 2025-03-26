import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#242424',
			paper: '#1a1a1a',
		},
		primary: {
			main: '#646cff',
		},
		secondary: {
			main: '#535bf2',
		},
		text: {
			primary: '#ffffffde',
			secondary: '#ccc',
		},
	},
	typography: {
		fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
	},
});

export default theme;
