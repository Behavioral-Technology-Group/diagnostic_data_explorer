import React from "react";
import DataList from "./DataList";
import Filter from "./Filter";
import "./ListViewer.css";

const filteredData = (data, filters) => {
  const cache = {};
  const key = JSON.stringify(filters);

  if (!cache[key]) {
    cache[key] = data.filter((d) => filters[d.name]);
  }

  return cache[key];
};

const ListViewer = ({ filters, data, version, setFilters, prettyPrint }) => {
  const has_data = data.length > 0;

  return (
    <div className="list-viewer">
      <div className="list-viewer__sidebar">
        <Filter options={filters} onChange={setFilters} />
      </div>
      <div className="list-viewer__main">
        <DataList
          data={filteredData(data, filters)}
          version={version}
          hasData={has_data}
          prettyPrint={prettyPrint}
        />
      </div>
    </div>
  );
};

export default ListViewer;
