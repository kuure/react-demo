import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function App() {
	const now = new Date()

	return (
		<div>
			<Header>
				<p>This should be in the header?</p>
			</Header>

			<p>Today is {now.getFullYear()}</p>

			<Footer greeting="Hello there" />
		</div>
	)
}

export default App
