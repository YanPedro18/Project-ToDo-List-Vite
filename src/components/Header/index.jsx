import imgTodo from "../../assets/Logo.svg"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <img src={imgTodo} alt="" />
    </header>
  )
}

export default Header