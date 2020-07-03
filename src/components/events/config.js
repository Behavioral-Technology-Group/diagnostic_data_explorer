import React from "react";

// const sample = {
//   button: 3,
//   hd_ctrl: 4,
//   hd_select: 0,
//   motor_ctrl: 1,
//   motor_level: 80,
//   piezo_ctrl: 1,
//   piezo_level: 80,
//   zap_ctrl: 1,
//   zap_level: 30,
// };

const handDetect = ({ hd_ctrl, hd_select }) => {
  return `✋ -> (${hd_ctrl}-${hd_select})`;
};
const Config = (props) => {
  const { button, zap_level, motor_level, piezo_level } = props;
  return (
    <span>{`🔘${button} ⚡${zap_level}% 📳${motor_level}% 🔊${piezo_level}% ${handDetect(
      props
    )}`}</span>
  );
};

export default Config;
