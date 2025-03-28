import styles from "./Game.module.css";
import Header from "@components/Header/Header";
import HouseGroup from "@components/HouseGroup/HouseGroup";
import Avatar from "@assets/icons/avatar-icon.svg?react";
import Wood from "@assets/icons/wood.svg?react";
import Bush1 from "@assets/icons/bush-1.svg?react";

function GamePage() {
  return (
    <div className="container">
      <Header />
      <main className={styles.content}>
        <HouseGroup />
        <Avatar className={styles.avatar} />
        <Wood className={`${styles.wood1} ${styles.decor}`} />
        <Wood className={`${styles.wood2} ${styles.decor}`} />
        <Wood className={`${styles.wood3} ${styles.decor}`} />
        <Wood className={`${styles.wood4} ${styles.decor}`} />
        <Wood className={`${styles.wood5} ${styles.decor}`} />
        <Bush1 className={`${styles.bush1} ${styles.decor}`} />
      </main>
    </div>
  );
}

export default GamePage;
