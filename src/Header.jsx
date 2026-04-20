// import CSS that only applies to this component
import styles from "./Header.module.css"

// the {children} is whatever is between the <Header> and </Header> 
// tags when the component is used
function Header({children}) {
	return (
		<header className={styles.headLine}>
			<h1>Header H1 Tag</h1>
			{children}
		</header>
	)
}

// make this available to 'import' elsewhere
export default Header
