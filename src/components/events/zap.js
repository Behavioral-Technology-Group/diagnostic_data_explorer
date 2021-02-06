import React from "react";
import { battToPercent } from "../../lib/helpers";

// const sample = {
//   target: 30,
//   charged: true,
//   skipped: false,
//   battv: 3.516,
//   release: 136,
//   exit: 90,
//   tchg: 12,
//   trel: 0,
// };

// const anotherSample = {
//   type: 4,
//   data: "02",
//   raw: "0481000002",
//   len: 1,
//   timestamped: true,
//   name: "Zap",
//   v: { skip: true, reason: "CHARGING" },
//   ts: "2020-09-30 19:03:37.390",
// };

const releaseToPercent = (rawRelease) => {
  return parseInt((parseFloat(rawRelease) / 450) * 100);
};

const adapter = (item) => {
  return {
    battv: item.battv,
    target: item.target ? parseInt(item.target) : undefined,
    release: item.release ? item.release : undefined,
    skipped: item.skipped || item.skip || (item.v && item.v.skip),
    reason: item.reason || (item.v && item.v.reason),
    actualRelease: item.trel
  };
};

const SkippedZap = (props) => {
  return <span>{`⏭️ (${props.reason})`}</span>;
};

const Zap = (props) => {
  const zap = adapter(props);
  if (zap.skipped) {
    return SkippedZap(zap);
  }

  const battery = battToPercent(zap.battv);
  const target = parseInt(zap.target);
  const release = releaseToPercent(zap.release);
  const delivery = zap.actualRelease > 0 ? "🟢" : "🔴";
  return <span>{`🔋${battery}% ⚡${release}% of ${target}% ${delivery}`}</span>;
};

export default Zap;
