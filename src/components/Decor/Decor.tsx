import styles from "./Decor.module.css";
import Wood from "@assets/icons/wood.svg?react";
import Bush1 from "@assets/icons/bushes/bush-1.svg?react";
import Bush1_1 from "@assets/icons/bushes/bush1-1.svg?react";
import Bush2 from "@assets/icons/bushes/bush-2.svg?react";
import Bush3 from "@assets/icons/bushes/bush-3.svg?react";
import Bush3_1 from "@assets/icons/bushes/bush3-1.svg?react";
import Bush4 from "@assets/icons/bushes/bush-4.svg?react";

interface IDecoration {
  Component: React.ElementType;
  className: string;
}

const decorations: IDecoration[] = [
  { Component: Wood, className: styles.wood1 },
  { Component: Wood, className: styles.wood2 },
  { Component: Wood, className: styles.wood3 },
  { Component: Wood, className: styles.wood4 },
  { Component: Wood, className: styles.wood5 },
  { Component: Bush1, className: styles.bush1 },
  { Component: Bush1_1, className: styles.bush1_1 },
  { Component: Bush1_1, className: styles.bush1_2 },
  { Component: Bush2, className: styles.bush2_1 },
  { Component: Bush2, className: styles.bush2_2 },
  { Component: Bush2, className: styles.bush2_3 },
  { Component: Bush2, className: styles.bush2_4 },
  { Component: Bush2, className: styles.bush2_5 },
  { Component: Bush2, className: styles.bush2_6 },
  { Component: Bush3, className: styles.bush3_1 },
  { Component: Bush3, className: styles.bush3_2 },
  { Component: Bush3_1, className: styles.bush3_3 },
  { Component: Bush4, className: styles.bush4_1 },
  { Component: Bush4, className: styles.bush4_2 },
  { Component: Bush4, className: styles.bush4_3 },
  { Component: Bush4, className: styles.bush4_4 },
  { Component: Bush4, className: styles.bush4_5 },
  { Component: Bush4, className: styles.bush4_6 },
  { Component: Bush4, className: styles.bush4_7 },
];

function Decor() {
  return (
    <div className={styles.decorContainer}>
      {decorations.map(({ Component, className }, index) => (
        <Component
          key={index}
          aria-hidden="true"
          className={`${className} ${styles.decor}`}
        />
      ))}
    </div>
  );
}

export default Decor;
