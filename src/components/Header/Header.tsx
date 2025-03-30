import styles from "./Header.module.css";
import { useNavigate } from "react-router";
import OpenBookIcon from "@assets/icons/book-open.svg?react";
import AwardIcon from "@assets/icons/award.svg?react";
import GiftIcon from "@assets/icons/gift.svg?react";
import HelpIcon from "@assets/icons/help-circle.svg?react";
import CoinIcon from "@assets/icons/coin.png";

const navItemsLeft = [
  { icon: OpenBookIcon, text: "Меню", route: "/" },
  { icon: AwardIcon, text: "Ачивки" },
];

const navItemsRight = [
  { icon: GiftIcon, text: "Магазин", className: styles.navShop },
  { icon: HelpIcon, text: "Словарик", className: styles.navHelp },
];

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          {navItemsLeft.map(({ icon: Icon, text, route }, index) => (
            <div
              key={index}
              className={styles.navItem}
              onClick={() => route && navigate(route)}
            >
              <Icon className={styles.navIcon} />
              <span className={styles.navText}>{text}</span>
            </div>
          ))}
        </div>
        <div className={styles.navRight}>
          {navItemsRight.map(({ icon: Icon, text, className }, index) => (
            <div key={index} className={`${styles.navItem} ${className || ""}`}>
              <Icon className={styles.navIcon} />
              <span className={styles.navText}>{text}</span>
            </div>
          ))}
        </div>

        <div className={styles.coinContainer}>
          <img src={CoinIcon} className={styles.coin} alt="Coin icon" />
          <div className={styles.amount}>1000</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
