import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SelectionProvider } from './context/SelectionContext';
import './index.css';
import router from './routes';
import theme from './theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
				<SelectionProvider>
					<RouterProvider router={router} />
					<ReactQueryDevtools />
				</SelectionProvider>
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
