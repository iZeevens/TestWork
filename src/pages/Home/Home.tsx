import styles from "./Home.module.css";
import DialogUI from "@components/ui/Dialog/Dialog";
import Layout from "@components/Layout/Layout";
import AvatarIcon from "@assets/images/avatar.png";

interface IDialog {
  id: number;
  text: React.ReactElement | string;
  buttonText: string;
  buttonPosition?: "right" | "left";
  tailPosition?: "left" | "bottom";
  className: string;
  hasSpeechBubble?: boolean;
  dotsConfig: {
    size: string;
    right?: string;
    left?: string;
    top?: string;
    bottom?: string;
  };
}

const dialogs: IDialog[] = [
  {
    id: 1,
    text: (
      <>
        Сейчас мы узнаем, как защитить свои данные на платформе объявлений. Это
        <b> важно знать</b>, чтобы никто не смог обмануть или украсть твои
        данные или деньги. Я буду рядом, чтобы помочь. <br />
        <b>Готов(-а)?</b>
      </>
    ),
    buttonText: "Далее",
    className: styles.dialog1,
    dotsConfig: { size: "300px", right: "-30px" },
  },
  {
    id: 2,
    text: "Давай для начала поможем создать профиль на платформе и потренируемся общаться, покупать и продавать безопасно",
    buttonText: "Начать",
    buttonPosition: "right",
    className: styles.dialog2,
    dotsConfig: { size: "220px", left: "-10px", top: "-20px" },
  },
  {
    id: 3,
    text: (
      <>
        <strong>Ваш пароль — как надёжный замок!</strong> Он должен быть
        длинным, не меньше 8 символов, и включать большие и маленькие буквы,
        цифры и специальные символы.
        <strong>Выбери один из предложенных паролей.</strong>
        <br />
        <span className={styles.warningText}>
          Если пароль короткий или состоит только из букв и нескольких цифр,
        </span>
        то злоумышленниками его легко угадать или подобрать с помощью
        специальных программ.
      </>
    ),
    buttonText: "Начать",
    buttonPosition: "right",
    tailPosition: "bottom",
    className: styles.dialog3,
    hasSpeechBubble: true,
    dotsConfig: { size: "200px", left: "-20px" },
  },
];

function HomePage() {
  return (
    <Layout>
      <main className={styles.content}>
        <img
          src={AvatarIcon}
          alt="Аватар персонажа"
          className={styles.avatarImage}
        />

        {dialogs.map((dialog) => (
          <DialogUI
            key={dialog.id}
            text={dialog.text}
            buttonText={dialog.buttonText}
            btnPostion={dialog.buttonPosition}
            tailPosition={dialog.tailPosition}
            className={dialog.className}
            dotsConfig={dialog.dotsConfig}
            hasSpeechBubble={dialog.hasSpeechBubble}
          />
        ))}
      </main>
    </Layout>
  );
}

export default HomePage;
