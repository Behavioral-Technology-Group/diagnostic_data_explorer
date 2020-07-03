import React, { useState } from "react";

import "./Explorer.css";
import Dump from "./Dump";
import ListViewer from "./ListViewer";

const Explorer = ({ filters, setFilters, data, version, raw }) => {
  const [view, setView] = useState("datalist-pretty");
  const shiftView = (e) => {
    setView(e.target.value);
  };

  const comps = {
    "datalist-pretty": (
      <ListViewer
        filters={filters}
        setFilters={setFilters}
        data={data}
        prettyPrint={true}
      />
    ),
    datalist: (
      <ListViewer
        filters={filters}
        setFilters={setFilters}
        data={data}
        prettyPrint={false}
      />
    ),
    dump: <Dump raw={raw} />,
  };

  return (
    <div className="explorer">
      <div className="explorer__header">
        <select onChange={shiftView}>
          <option value="datalist-pretty">Datalist Pretty</option>
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
