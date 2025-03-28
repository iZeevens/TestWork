import styles from "./HouseGroup.module.css";
import HouseUI from "@components/ui/House/House";
import FirstGround from "@assets/images/house-placeholder1.png"
import SecondGround from "@assets/images/house-placeholder2.png"
import ThirdGround from "@assets/images/house-placeholder3.png"


function HouseGroup() {

  return (
    <div className={styles.houseGroup}>
      <HouseUI text="fdasfdfdsfsd23" isSelected={false} groundImage={FirstGround} />
      <HouseUI text="fdasfdfdsfsd23" isSelected={true} groundImage={SecondGround} />
      <HouseUI text="fdasfdfdsfsd23" isSelected={false} groundImage={ThirdGround} />
    </div>
  )
}

export default HouseGroup;
