import React, { useState } from "react";

import "./Explorer.css";
import Dump from "./Dump";
import ListViewer from "./ListViewer";

const Explorer = ({ filters, setFilters, data, version, raw }) => {
  const [view, setView] = useState("datalist");
  const shiftView = (e) => {
    console.log(e.target.value);
    setView(e.target.value);
  };

  const comps = {
    datalist: (
      <ListViewer filters={filters} setFilters={setFilters} data={data} />
    ),
    dump: <Dump raw={raw} />,
  };

  return (
    <div className="explorer">
      <div className="explorer__header">
        <select onChange={shiftView}>
          <option value="datalist">Datalist</option>
          <option value="dump">Dump</option>
        </select>
        <h2 className="explorer__version">Parser version: {version}</h2>
      </div>
      <div className="explorer__body">{comps[view]}</div>
    </div>
  );
};

export default Explorer;
