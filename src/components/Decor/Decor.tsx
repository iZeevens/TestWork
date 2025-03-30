import styles from "./Decor.module.css";
import { decorations } from "./Decor.const";

function Decor() {
  return (
    <div className={styles.decorContainer}>
      {decorations.map(({ src, className }, index) => (
        <img
          key={index}
          src={src}
          aria-hidden="true"
          className={`${className} ${styles.decor}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default Decor;
