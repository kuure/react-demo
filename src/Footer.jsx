// this function has a value passed to it
function Footer({greeting}) {

	// automatically puts the year in the footer

	return (
		<footer>
			<h1>Footer Component</h1>
			<p>{greeting}</p>
			<p>©{new Date().getFullYear()}</p>
		</footer>
	)
}
export default Footer
