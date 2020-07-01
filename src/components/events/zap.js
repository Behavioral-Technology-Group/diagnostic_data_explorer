import React from "react";
import { battToPercent } from "../../lib/helpers";

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
