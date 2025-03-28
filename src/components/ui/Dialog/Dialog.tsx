import styles from "./Dialog.module.css";


interface IDialogUIProps {
  text: string;
  buttonText: string;
  background: string;
}


function DialogUI({ text, buttonText }: IDialogUIProps) {
  return (
    <div
      className={styles.container}
    >
      <p className={styles.text}>{text}</p>

      <button className={styles.btn}>{buttonText}</button>
    </div>
  );
}

export default DialogUI;
