import styles from "./Header.module.css";
import { useNavigate } from "react-router";
import OpenBookIcon from "@assets/icons/book-open.svg?react";
import AwardIcon from "@assets/icons/award.svg?react";
import GiftIcon from "@assets/icons/gift.svg?react";
import HelpIcon from "@assets/icons/help-circle.svg?react";
import CoinIcon from "@assets/icons/coin.svg?react";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.navItem} onClick={handleClick}>
            <OpenBookIcon className={styles.navIcon} />
            <span className={styles.navText}>Меню</span>
          </div>
          <div className={styles.navItem}>
            <AwardIcon className={styles.navIcon} />
            <span className={styles.navText}>Ачивки</span>
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={`${styles.navItem} ${styles.navShop}`}>
            <GiftIcon className={styles.navIcon} />
            <span className={styles.navText}>Магазин</span>
          </div>
          <div className={`${styles.navItem} ${styles.navHelp}`}>
            <HelpIcon className={styles.navIcon} />
            <span className={styles.navText}>Словарик</span>
          </div>
        </div>

        <div className={styles.coinContainer}>
          <CoinIcon className={styles.coin} />
          <div className={styles.amount}>1000</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
