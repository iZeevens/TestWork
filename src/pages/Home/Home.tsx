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
          text={
            <>
              Сейчас мы узнаем, как защитить свои данные на платформе
              объявлений. Это <b>важно знать</b>, чтобы никто не смог обмануть
              или украсть твои данные или деньги. Я буду рядом, чтобы помочь.{" "}
              <br />
              <b>Готов(-а)?</b>
            </>
          }
          buttonText="Далее"
          className={styles.dialog1}
          dotsConfig={{ size: "300px", right: "-30px" }}
        />
        <DialogUI
          text="Давай для начала поможем создать профиль на платформе и потренируемся общаться, покупать и продавать безопасно"
          buttonText="Начать"
          btnPostion="right"
          className={styles.dialog2}
          dotsConfig={{ size: "220px", left: "-10px", top: "-20px" }}
        />
        <DialogUI
          text={
            <>
              <strong>Ваш пароль — как надёжный замок!</strong> Он должен быть
              длинным, не меньше 8 символов, и включать большие и маленькие
              буквы, цифры и специальные символы.{" "}
              <strong>Выбери один из предложенных паролей.</strong>
              <br />
              <span className={styles.warningText}>
                Если пароль короткий или состоит только из букв и нескольких
                цифр,
              </span>{" "}
              то злоумышленниками его легко угадать или подобрать с помощью
              специальных программ.
            </>
          }
          buttonText="Начать"
          btnPostion="right"
          type="bottom"
          className={styles.dialog3}
          hasSpeechBubble
          dotsConfig={{ size: "200px", left: "-20px" }}
        />
      </main>
    </div>
  );
}

export default HomePage;
