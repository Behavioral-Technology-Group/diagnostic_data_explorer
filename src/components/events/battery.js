import React from "react";
import { battToPercent } from "../../lib/helpers";

const sample = {
  voltage: 3.965,
  vusb: true,
  charged: false,
};

const Battery = ({ voltage, vusb, charged }) => {
  return <span>{`${vusb ? "🔌" : ""}🔋${battToPercent(voltage)}% `}</span>;
};

export default Battery;
