import React from "react";

const sample = {
  target: 30,
  charged: true,
  skipped: false,
  battv: 3.516,
  release: 136,
  exit: 90,
  tchg: 12,
  trel: 0,
};

const battToPercent = (rawVolt) => {
  let volt = parseFloat(rawVolt) * 1000;
  let p = undefined;

  if (volt < 3616) {
    p = ((volt - 3150) / (3616 - 3150)) * 7 + 0;
  } else if (volt < 3759) {
    p = ((volt - 3616) / (3759 - 3616)) * (50 - 7) + 7;
  } else if (volt < 4100) {
    p = ((volt - 3759) / (4100 - 3759)) * (100 - 50) + 50;
  } else {
    p = 100;
  }

  return parseInt(p);
};

const releaseToPercent = (rawRelease) => {
  return parseInt((parseFloat(rawRelease) / 450) * 100);
};

const Zap = (props) => {
  const battery = battToPercent(props.battv);
  const target = parseInt(props.target);
  const release = releaseToPercent(props.release);
  const skipped = props.skipped ? "⏭️" : "";
  return <span>{`🔋${battery}% ⚡${release}% of ${target}% ${skipped}`}</span>;
};

export default Zap;
