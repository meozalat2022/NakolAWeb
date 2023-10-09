import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./MenuItems.module.css";
import Link from "next/link";

const MenueItems = ({ key, item }) => {
  const [showMenu, setShowMenu] = useState(false);
  const myRef = useRef();
  const handleTiggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const hanleMouseDown = (event) => {
      if (showMenu && myRef.current && !myRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", hanleMouseDown);
  }, [showMenu]);

  const onMouseEnter = () => {
    setShowMenu(true);
  };
  const onMouseLeave = () => {
    setShowMenu(false);
  };
  return item.subMenue && item.subMenue.length > 0 ? (
    <li
      className={styles.parent}
      ref={myRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={key}
    >
      <button className={styles.btn} onClick={handleTiggleMenu}>
        {item.title}
      </button>
      <Dropdown showMenu={showMenu} subMenuItem={item.subMenue} />
    </li>
  ) : (
    <li className={styles.parent} key={key}>
      <Link href={`${item.url}/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default MenueItems;

{
  /* <li className={styles.nav_item} key={index}>
      <a
        className={styles.title}
        href={`${menu.url}/${!menu.sortBy ? menu.id : menu.sortBy}`}
      >
        {menu.title}
      </a>
    </li> */
}
