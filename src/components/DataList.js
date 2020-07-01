import React from "react";
import "./DataList.css";

import Zap from "./events/zap";
import Config from "./events/config";
import Battery from "./events/battery";

const defaultInfo = (info) => {
  return stringifyInfo(info);
};
const jsonizedInfo = (info) => {
  return JSON.stringify(info);
};
const infoDictionary = {
  Zap,
  Config,
  Battery,
};

const stringifyInfo = (info) => {
  return Object.keys(info)
    .map((k) => `${k}: ${info[k]}`)
    .join(" || ");
};

const dataItem = (dataset) => {
  return (
    <tr className="datalist__item">
      <td>{dataset.name}</td>
      <td>{dataset.ts}</td>
      <td>{(infoDictionary[dataset.name] || defaultInfo)(dataset.v)}</td>
    </tr>
  );
};
const DataList = ({ data, version, hasData }) => {
  const noDataComp = <h3>No data for this feedback</h3>;
  const dataComp = (
    <div>
      <h2>Parser version: {version}</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Timestamp</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>{data.map((d) => dataItem(d))}</tbody>
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
