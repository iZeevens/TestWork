import styles from "./Layout.module.css";
import Header from "@components/Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
