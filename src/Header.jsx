import styles from "./Header.module.css"

function Header({children}) {
  return (
    <header>
      <h1 className={styles.headline}>Boo</h1>
      {children}
    </header>
  )
}

export default Header
