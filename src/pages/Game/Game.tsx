import styles from "./Game.module.css";
import HouseGroup from "@components/HouseGroup/HouseGroup";
import Avatar from "@assets/icons/avatar-icon.png";
import Decor from "@components/Decor/Decor";
import Layout from "@components/Layout/Layout";

function GamePage() {
  return (
    <Layout>
      <main className={styles.content}>
        <HouseGroup />
        <img src={Avatar} className={styles.avatar} />
        <Decor />
      </main>
    </Layout>
  );
}

export default GamePage;
