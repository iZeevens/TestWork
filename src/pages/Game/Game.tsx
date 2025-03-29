import styles from "./Game.module.css";
import Header from "@components/Header/Header";
import HouseGroup from "@components/HouseGroup/HouseGroup";
import Avatar from "@assets/icons/avatar-icon.svg?react";
import Decor from "@components/Decor/Decor";

function GamePage() {
  return (
    <div className="container">
      <Header />
      <main className={styles.content}>
        <HouseGroup />
        <Avatar className={styles.avatar} />
        <Decor />
      </main>
    </div>
  );
}

export default GamePage;
