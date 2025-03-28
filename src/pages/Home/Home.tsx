import styles from "./Home.module.css";
import Header from "@components/Header/Header";
import AvatarIcon from "@assets/images/avatar.png";
import DialogUI from "@components/ui/Dialog/Dialog";

function HomePage() {
  return (
    <div className="container">
      <Header />
      <main className={styles.content}>
        <img
          src={AvatarIcon}
          alt="Avito avatar"
          className={styles.avatarImage}
        />
        <DialogUI
          text="Сейчас мы узнаем, как защитить свои данные на платформе объявлений. Это важно знать, чтобы никто не смог обмануть или украсть твои данные или деньги. Я буду рядом, чтобы помочь. Готов(-а)?"
          buttonText="Далее"
          background="bg-1.png"
        />
      </main>
    </div>
  );
}

export default HomePage;
