// the "pages" are just react components
import Home from './Home.jsx'
import About from './About.jsx'
import NotFound from './NotFound.jsx'

// this is looped and parsed to define the routes 
export const routes = [
	{
		path: '/',
		element: <Home />,
		label: 'Home',
		end: true
	},
	{
		path: '/about',
		element: <About />,
		label: 'About'
	},
	{
		path: '*',
		element: <NotFound />
	},
]

