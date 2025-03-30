import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChangeIndex = (index: number) => {
    if (index < 0 || index >= HOUSE_DATA.length) return;

    setSelectedIndex(index);
  };

  return (
    <div className={styles.houseGroup}>
      <div className={styles.desktopHouses}>
        {HOUSE_DATA.map((house, index) => (
          <HouseUI
            key={house.text}
            index={index}
            className={`${styles.house} ${
              isMobile ? (index === selectedIndex ? styles.active : "") : ""
            }`}
            text={house.text}
            isSelected={index === selectedIndex}
            setSelectedIndex={handleChangeIndex}
            groundImage={house.groundImage}
          />
        ))}

        <div className={styles.buttons}>
          {HOUSE_DATA.map((house, index) => (
            <ButtonUI
              key={house.text}
              className={styles.btn}
              type="secondary"
              onClick={() => handleChangeIndex(index)}
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
