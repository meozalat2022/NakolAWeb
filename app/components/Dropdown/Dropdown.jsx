import styles from "./Dropdown.module.css";
import MenueItems from "../MenueItems/MenueItems";
const Dropdown = ({ subMenuItem, showMenu }) => {
  return (
    <ul
      className={`${styles.dropdown} ${
        showMenu ? styles.showMenuItem : styles.hideMenuItem
      }`}
    >
      {subMenuItem.map((item, index) => (
        <MenueItems item={item} key={index} />
        // <li key={index}>
        //   <a className={styles.title} href={`/mealsList/${submenu.id}`}>
        //     {submenu.title}
        //   </a>
        // </li>
      ))}
    </ul>
  );
};

export default Dropdown;
