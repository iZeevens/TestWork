import styles from "./Decor.module.css"

enum DecorPaths {
  TREE = "decors/tree.png",
  BUSH_1 = "decors/bush-1.png",
  BUSH_1_1 = "decors/bush1-1.png",
  BUSH_2 = "decors/bush-2.png",
  BUSH_3 = "decors/bush-3.png",
  BUSH_3_1 = "decors/bush3-1.png",
  BUSH_4 = "decors/bush-4.png",
}

interface IDecoration {
  src: string;
  className: string;
}

export const decorations: IDecoration[] = [
  { src: DecorPaths.TREE, className: styles.tree1 },
  { src: DecorPaths.TREE, className: styles.tree2 },
  { src: DecorPaths.TREE, className: styles.tree3 },
  { src: DecorPaths.TREE, className: styles.tree4 },
  { src: DecorPaths.TREE, className: styles.tree5 },
  { src: DecorPaths.BUSH_1, className: styles.bush1 },
  { src: DecorPaths.BUSH_1_1, className: styles.bush1_1 },
  { src: DecorPaths.BUSH_1_1, className: styles.bush1_2 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_1 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_2 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_3 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_4 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_5 },
  { src: DecorPaths.BUSH_2, className: styles.bush2_6 },
  { src: DecorPaths.BUSH_3, className: styles.bush3_1 },
  { src: DecorPaths.BUSH_3, className: styles.bush3_2 },
  { src: DecorPaths.BUSH_3_1, className: styles.bush3_3 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_1 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_2 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_3 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_4 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_5 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_6 },
  { src: DecorPaths.BUSH_4, className: styles.bush4_7 },
];

