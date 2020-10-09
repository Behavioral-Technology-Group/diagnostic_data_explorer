import React from "react";
import "./DataList.css";

import Zap from "./events/zap";
import Vibe from "./events/vibration";
import Beep from "./events/beep";
import Config from "./events/config";
import Battery from "./events/battery";

const defaultInfo = (info) => {
  return stringifyInfo(info);
};

const infoDictionary = {
  Zap,
  Config,
  Battery,
  Vibe,
  Beep,
};

const stringifyInfo = (info) => {
  return Object.keys(info)
    .map((k) => `${k}: ${info[k]}`)
    .join(" || ");
};

const rawToggler = (props) => {
  return (
    <div className="datalist__raw">
      <button
        className="datalist__raw-button grow"
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onClick={() => alert(JSON.stringify(props, null, 2))}
      >
        {"👁"}
      </button>
      <button
        className="datalist__raw-button grow"
        onClick={() =>
          navigator.clipboard.writeText(JSON.stringify(props, null, 2))
        }
      >
        {"📋"}
      </button>
    </div>
  );
};

const dataItem = (dataset, prettyPrint) => {
  const infoComp = prettyPrint
    ? infoDictionary[dataset.name] || defaultInfo
    : defaultInfo;

  return (
    <tr className="datalist__item">
      <td className="datalist__column-raw">{rawToggler(dataset)}</td>
      <td>{dataset.name}</td>
      <td>{dataset.ts}</td>
      <td>{infoComp(dataset.v)}</td>
    </tr>
  );
};

const prepData = (data, prettyPrint) => {
  const reversedData = [...data].reverse();
  return reversedData.map((d) => {
    return dataItem(d, prettyPrint);
  });
};

const DataList = ({ data, version, hasData, prettyPrint }) => {
  const noDataComp = <h3>No data for this feedback</h3>;
  const dataComp = (
    <div>
      <table>
        <thead>
          <tr>
            <th className="datalist__column-raw">Raw</th>
            <th>Type</th>
            <th>Timestamp</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>{prepData(data, prettyPrint)}</tbody>
      </table>
    </div>
  );

  const state = hasData ? "data" : "noData";
  const content = {
    noData: noDataComp,
    data: dataComp,
  };

  return <div className="data__list">{content[state]}</div>;
};

export default DataList;
