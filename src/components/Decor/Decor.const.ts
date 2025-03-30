import styles from "./Decor.module.css";

const decorPaths = {
  TREE: "decors/tree.png",
  BUSH: {
    BUSH_1: "decors/bush-1.png",
    BUSH_1_1: "decors/bush1-1.png",
    BUSH_2: "decors/bush-2.png",
    BUSH_3: "decors/bush-3.png",
    BUSH_3_1: "decors/bush3-1.png",
    BUSH_4: "decors/bush-4.png",
  },
} as const;

interface IDecoration {
  src: string;
  className: string;
}

const treeClasses = ["tree1", "tree2", "tree3", "tree4", "tree5"];
const bushClasses = [
  ["bush1", "BUSH_1"],
  ["bush1_1", "BUSH_1_1"],
  ["bush1_2", "BUSH_1_1"],
  ["bush2_1", "BUSH_2"],
  ["bush2_2", "BUSH_2"],
  ["bush2_3", "BUSH_2"],
  ["bush2_4", "BUSH_2"],
  ["bush2_5", "BUSH_2"],
  ["bush2_6", "BUSH_2"],
  ["bush3_1", "BUSH_3"],
  ["bush3_2", "BUSH_3"],
  ["bush3_3", "BUSH_3_1"],
  ["bush4_1", "BUSH_4"],
  ["bush4_2", "BUSH_4"],
  ["bush4_3", "BUSH_4"],
  ["bush4_4", "BUSH_4"],
  ["bush4_5", "BUSH_4"],
  ["bush4_6", "BUSH_4"],
  ["bush4_7", "BUSH_4"],
];

export const decorations: IDecoration[] = [
  ...treeClasses.map((cls) => ({
    src: decorPaths.TREE,
    className: styles[cls],
  })),
  ...bushClasses.map(([cls, key]) => ({
    src: decorPaths.BUSH[key as keyof typeof decorPaths.BUSH],
    className: styles[cls],
  })),
];
