import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./MenuItems.module.css";
import Link from "next/link";
import { menueItems } from "../meueItems";

const MenueItems = () => {
  const [showMenu, setShowMenu] = useState("");
  // const myRef = useRef();
  // const handleTiggleMenu = () => {
  //   setShowMenu((prev) => !prev);
  // };
  // console.log(menueItems.title);

  // useEffect(() => {
  //   const hanleMouseDown = (event) => {
  //     if (showMenu && myRef.current && !myRef.current.contains(event.target)) {
  //       setShowMenu(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", hanleMouseDown);
  // }, [showMenu]);

  // const onMouseEnter = () => {
  //   setShowMenu(true);
  // };
  // const onMouseLeave = () => {
  //   setShowMenu(false);
  // };
  // return item.subMenue && item.subMenue.length > 0 ? (
  //   <li
  //     className={styles.parent}
  //     ref={myRef}
  //     onMouseEnter={onMouseEnter}
  //     onMouseLeave={onMouseLeave}
  //     key={key}
  //   >
  //     <button className={styles.btn} onClick={handleTiggleMenu}>
  //       {item.title}
  //     </button>
  //     <Dropdown showMenu={showMenu} subMenuItem={item.subMenue} />
  //   </li>
  // ) : (
  //   <li className={styles.parent} key={key}>
  //     <Link href={`${item.url}/${item.id}`}>{item.title}</Link>
  //   </li>
  // );
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 ">
      {menueItems.map((item) => {
        return (
          <div>
            <div className="py-0 px-3 inline-block text-left md:cursor-pointer group border md:border-solid border-accent border-y-0 border-r-0">
              <h1
                onClick={() =>
                  setShowMenu(() =>
                    showMenu !== item.title ? item.title : setShowMenu("")
                  )
                }
                className="text-base text-accent mx-4 py-2 "
              >
                {item.title}
              </h1>
              {item.subMen && (
                <div>
                  <div className=" absolute top-60 hidden group-hover:md:block hover:md:block bg-primary">
                    <div className="w-4 h-4 left-3 -top-2 absolute mt-1 bg-primary rotate-45"></div>
                    <div>
                      {item.subMenue.map((sub) => {
                        return (
                          <div className="px-8 border md:border-solid border-b-accent border-x-0 border-t-0 flex justify-center">
                            <h1 className="text-base text-accent">
                              {sub.title}
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* mobile Menue */}
            {item.subMen && (
              <div
                className={`${showMenu === item.title ? "md:block" : "hidden"}`}
              >
                {item.subMenue.map((it) => {
                  return (
                    <li className="list-none">
                      <Link style={{ textDecoration: "none" }} href="/">
                        {it.title}
                      </Link>
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
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
