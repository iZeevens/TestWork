import styles from "./Dialog.module.css";
import { useNavigate } from "react-router";
import ButtonUI from "../Button/Button";
import FullBubble1 from "@assets/backgrounds/full-bubble-with-tail1.svg?react";
import FullBubble2 from "@assets/backgrounds/full-bubble-with-tail2.svg?react";
import BubbleBlackBg from "@assets/backgrounds/bubble-black-bg.svg?react";
import ScatteringDots from "@assets/backgrounds/scattering-dots.svg?react";
import SpeechBubble from "@assets/backgrounds/speech-bubble.svg?react";

interface IDialogUIProps {
  text: React.ReactNode;
  buttonText: string;
  type?: "left" | "bottom";
  btnPostion?: "left" | "right";
  className?: string;
  dotsConfig?: {
    size?: string; // Пример: "60px", "10%"
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    rotate?: string; // Пример: "15deg"
    opacity?: number; // 0-1
    zIndex?: number;
  };
  hasSpeechBubble?: boolean;
}

function DialogUI({
  text,
  buttonText,
  type = "left",
  btnPostion = "left",
  className = "",
  dotsConfig = {
    size: "auto",
    top: "20px",
    left: "30px",
    rotate: "0deg",
    opacity: 1,
    zIndex: 3,
  },
  hasSpeechBubble = false,
}: IDialogUIProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/game")
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        {hasSpeechBubble && <SpeechBubble className={styles.speechBubble} />}
        {type === "left" ? <FullBubble1 className={styles.fullBubble} /> : <FullBubble2 className={styles.fullBubble} />}
        {!hasSpeechBubble && <BubbleBlackBg className={styles.bubbleBackgound} />}
        <ScatteringDots
          className={styles.scatteringDots}
          style={{
            width: dotsConfig.size,
            height: dotsConfig.size,
            top: dotsConfig.top,
            left: dotsConfig.left,
            right: dotsConfig.right,
            bottom: dotsConfig.bottom,
            transform: `rotate(${dotsConfig.rotate})`,
            opacity: dotsConfig.opacity,
            zIndex: dotsConfig.zIndex,
          }}
        />
        <p className={`${styles.text} ${type === 'bottom' ? styles.textBottom : ''}`}>{text}</p>
        <ButtonUI
          type="primary"
          className={`${styles.button} ${
            btnPostion === "right" ? styles.right : ""
          } ${type === 'bottom' ? styles.buttonBottom  : ''}`}
          onClick={handleClick}
        >
          {buttonText}
        </ButtonUI>
      </div>
    </div>
  );
}

export default DialogUI;
