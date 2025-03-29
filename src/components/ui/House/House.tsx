import styles from "./House.module.css";
import HouseImage from "@assets/images/house.png";
import SelectedHouseImage from "@assets/images/selected-house.png";
import ButtonUI from "../Button/Button";

interface IHouseUIProps {
  isSelected: boolean;
  text: string;
  groundImage: string;
  className?: string
}

function HouseUI({ isSelected, text, groundImage, className }: IHouseUIProps) {

  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.image} src={isSelected ? SelectedHouseImage : HouseImage} alt="House" />
      <img className={styles.ground} src={groundImage} alt="Ground" >
      </img>
      <ButtonUI className={styles.btn} type="secondary">{text}</ButtonUI>
    </div>
  );
}

export default HouseUI;
