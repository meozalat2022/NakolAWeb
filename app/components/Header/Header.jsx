import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo_.png" width={450} height={100} alt="logo" />
          </div>
          <div className={styles.bannerImage}>
            <Image src="/banner.png" width={450} height={100} alt="Banner" />
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
