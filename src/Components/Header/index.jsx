import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};