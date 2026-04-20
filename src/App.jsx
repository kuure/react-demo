// use some of the built-in Routing tools from React
import {Routes, Route} from 'react-router-dom'

// all the routes - the "pages" - are degined in routes.jsx
import {routes} from './routes'

// the components
import Header from "./Header"
import Footer from "./Footer"
import Nav from './Nav'


// the main App function that runs everything
function App() {


	// comments here because you can't put them inside of the return():

	// this returns an outer div that contains all the components
	// the <Header> shows how to wrap content inside a component
	// the <Nav /> uses the routes.jsx file to build the navigation
	// the <Routes> block handles the links
	// the <Footer> component has a parameter named "greeting"
	return (

		<div>

			<Header>
				<p>This Text is wrapped by the &lt;Header&gt; component</p>
			</Header>

			<Nav />

			<Routes>
				{routes.map(({path, element}) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>

			<Footer greeting="Hello From The Footer" />

		</div>

	)
}


// this says 'make the "App" function _importable_ elsewhere...
export default App
