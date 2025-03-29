import { useState } from "react";
import styles from "./HouseGroup.module.css";
import HouseUI from "@components/ui/House/House";
import FirstGround from "@assets/images/houses/house-placeholder1.png";
import SecondGround from "@assets/images/houses/house-placeholder2.png";
import ThirdGround from "@assets/images/houses/house-placeholder3.png";
import ButtonUI from "@components/ui/Button/Button";

const HOUSE_DATA = [
  {
    text: "Modern Villa",
    groundImage: FirstGround,
  },
  {
    text: "Country House",
    groundImage: SecondGround,
  },
  {
    text: "Mountain Cabin",
    groundImage: ThirdGround,
  },
];

function HouseGroup() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className={styles.houseGroup}>
      <div className={styles.desktopHouses}>
        {HOUSE_DATA.map((house, index) => (
          <HouseUI
            key={house.text}
            className={styles.house}
            text={house.text}
            isSelected={index === selectedIndex}
            groundImage={house.groundImage}
          />
        ))}

        <div className={styles.buttons}>
          {HOUSE_DATA.map((house, index) => (
            <ButtonUI
              key={house.text}
              className={styles.btn}
              type="secondary"
              onClick={() => setSelectedIndex(index)}
            >
              {house.text}
            </ButtonUI>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HouseGroup;
