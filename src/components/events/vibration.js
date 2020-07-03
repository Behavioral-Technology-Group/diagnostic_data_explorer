import React from "react";

// const sample = {
//   count: 1,
//   level: 100,
//   freq: 6000,
//   duration: 500,
// };

const Vibration = ({ count, level, duration }) => {
  return <span>{`📳${count}x${level}% ⌛${duration}ms`}</span>;
};

export default Vibration;
