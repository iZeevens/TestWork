import styles from "./HouseGroup.module.css";
import HouseUI from "@components/ui/House/House";
import FirstGround from "@assets/images/house-placeholder1.png";
import SecondGround from "@assets/images/house-placeholder2.png";
import ThirdGround from "@assets/images/house-placeholder3.png";
import ButtonUI from "@components/ui/Button/Button";

function HouseGroup() {
  return (
    <div className={styles.houseGroup}>
      <div className={styles.desktopHouses}>
        <HouseUI
          className={styles.house}
          text="fdasfdfdsfsd23"
          isSelected={false}
          groundImage={FirstGround}
        />
        <HouseUI
          className={styles.house}
          text="fdasfdfdsfsd23"
          isSelected={true}
          groundImage={SecondGround}
        />
        <HouseUI
          className={styles.house}
          text="fdasfdfdsfsd23"
          isSelected={false}
          groundImage={ThirdGround}
        />

        <div className={styles.buttons}>
          <ButtonUI className={styles.btn} type="secondary">
            fdasfdfdsfsd23
          </ButtonUI>
          <ButtonUI className={styles.btn} type="secondary">
            fdasfdfdsfsd23
          </ButtonUI>
          <ButtonUI className={styles.btn} type="secondary">
            fdasfdfdsfsd23
          </ButtonUI>
        </div>
      </div>
    </div>
  );
}

export default HouseGroup;
