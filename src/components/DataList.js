import React from "react";
import "./DataList.css";

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
      <td>{stringifyInfo(dataset.v)}</td>
    </tr>
  );
};
const DataList = ({ data }) => {
  return (
    <div className="data__list">
      {data.length === 0 ? (
        <h3>No data for this feedback</h3>
      ) : (
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
      )}
    </div>
  );
};

export default DataList;
