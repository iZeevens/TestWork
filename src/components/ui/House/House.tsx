import styles from "./House.module.css";
import HouseImage from "@assets/images/house.png";
import SelectedHouseImage from "@assets/images/selected-house.png";

interface IHouseUIProps {
  isSelected: boolean;
  text: string;
  groundImage: string
}

function HouseUI({ isSelected, text, groundImage }: IHouseUIProps) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={isSelected ? SelectedHouseImage : HouseImage} alt="House" />
      <img className={styles.ground} src={groundImage} alt="Ground" >
      </img>
      <button>{text}</button>
    </div>
  );
}

export default HouseUI;
