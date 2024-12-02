import { createBrowserRouter } from 'react-router-dom';
import { GameRecommender } from './components/GameRecommender';
import ErrorPage from './pages/ErrorPage';
import GameDetailPage from './pages/GameDetailPage';
import GamePicker from './pages/GamePicker';
import GenrePicker from './pages/GenrePicker';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import Library from './pages/Library';
import PlatformPicker from './pages/PlatformPicker';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <LandingPage /> },
			{ path: 'games/:slug', element: <GameDetailPage /> },
			{ path: '/library', element: <Library /> },
			{ path: '/platforms', element: <PlatformPicker /> },
			{ path: '/genres', element: <GenrePicker /> },
			{ path: 'gamepicker', element: <GamePicker /> },
			{ path: '/results', element: <GameRecommender /> },
		],
	},
]);

export default router;
