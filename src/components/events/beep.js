import React from "react";

const sample = {
  count: 1,
  level: 100,
  freq: 6000,
  duration: 500,
};

const Beep = ({ count, freq, duration }) => {
  return <span>{`🔊${count}x${freq}Hz ⌛${duration}ms`}</span>;
};

export default Beep;
