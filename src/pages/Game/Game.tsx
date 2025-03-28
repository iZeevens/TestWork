import styles from "./Game.module.css";
import Header from "@components/Header/Header";
import HouseGroup from "@components/HouseGroup/HouseGroup";

function GamePage() {
  return (
    <div className="container">
      <Header />
      <main className={styles.content}>
        <HouseGroup />
      </main>
    </div>
  );
}

export default GamePage;
