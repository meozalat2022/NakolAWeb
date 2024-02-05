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

  // py-0 px-3 inline-block  xl:cursor-pointer group border xl:border-solid border-accent border-y-0 border-r-0 rounded-md w-full text-center bg-accent xs:text-center sm:text-center sm:bg-accent xl:bg-primary
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-6 ">
      {menueItems.map((item, index) => {
        return (
          <div key={index} className="xl:flex-col justify-center">
            <div className=" hidden xl:inline-block py-0 px-3 cursor-pointer group border xl:border-solid border-accent border-y-0 border-r-0  w-full text-center xl:bg-primary">
              <h1 className="text-base xl:text-accent text-primary px-2   ">
                {!item.subMen ? (
                  <a
                    className="no-underline text-accent"
                    href={`/mealsList/${item.id}`}
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h1>
              {item.subMen && (
                <div>
                  <div className=" z-50 absolute top-56 hidden group-hover:xl:block hover:xl:block bg-primary">
                    <div>
                      {item.subMenue.map((sub, index) => {
                        return (
                          <div
                            key={index}
                            className="px-12 border md:border-solid border-b-accent border-x-0 border-t-0 flex justify-center"
                          >
                            <a
                              href={`/mealsList/${sub.id}`}
                              className="text-base text-accent no-underline py-2 hover:underline"
                            >
                              {sub.title}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* mobile Menue */}
            <div className="bg-accent text-center rounded-md">
              <h1
                onClick={() =>
                  setShowMenu(() =>
                    showMenu !== item.title ? item.title : setShowMenu("")
                  )
                }
                className="text-base inline-block xl:hidden xl:text-accent text-primary px-2"
              >
                {!item.subMen ? (
                  <a className="no-underline" href={`/mealsList/${item.id}`}>
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h1>
            </div>
            {item.subMen && (
              <div
                className={`${showMenu === item.title ? "md:block" : "hidden"}`}
              >
                {item.subMenue.map((it, index) => {
                  return (
                    <li
                      key={index}
                      className="list-none flex justify-center pt-2 "
                    >
                      <h4>
                        <a
                          className="no-underline text-primary text-xs"
                          href={`/mealsList/${it.id}`}
                        >
                          {it.title}
                        </a>
                      </h4>
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <div className="bg-accent text-center rounded-md">
        <h1 className="text-base inline-block xl:hidden xl:text-accent text-primary px-2">
          <a className="no-underline " href="/">
            الرئيسية
          </a>
        </h1>
      </div>
    </div>
  );
};

export default MenueItems;
