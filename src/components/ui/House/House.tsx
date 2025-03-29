import styles from "./House.module.css";
import House from "@assets/images/houses/house.png";
import SelectedHouse from "@assets/images/houses/selected-house.png";
import ButtonUI from "../Button/Button";

interface IHouseUIProps {
  isSelected: boolean;
  text: string;
  groundImage: string;
  className?: string;
}

function HouseUI({
  isSelected,
  text,
  groundImage,
  className = "",
}: IHouseUIProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img
        className={styles.image}
        src={isSelected ? SelectedHouse : House}
        alt={`${text} illustration`}
      />
      <img
        className={styles.ground}
        src={groundImage}
        alt="Ground texture"
      ></img>
      <ButtonUI className={styles.btn} type="secondary">
        {text}
      </ButtonUI>
    </div>
  );
}

export default HouseUI;
