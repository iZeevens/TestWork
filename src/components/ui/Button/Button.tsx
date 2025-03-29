import styles from "./Button.module.css";

type ButtonType = "primary" | "secondary";
interface IButtonUIProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type: ButtonType;
}

function ButtonUI({ children, className, type = "primary", ...props }: IButtonUIProps) {
  return <button {...props} className={`${styles[type]} ${styles.btn} ${className}`}>{children}</button>;
}

export default ButtonUI;
