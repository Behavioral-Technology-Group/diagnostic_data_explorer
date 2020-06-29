import React from "react";
import DataList from "./DataList";
import Filter from "./Filter";
import "./Explorer.css";

const filteredData = (data, filters) => data.filter((d) => filters[d.name]);

const Explorer = ({ filters, setFilters, data, version }) => {
  const hasData = data.length > 0;
  return (
    <div className="explorer">
      <div className="explorer__sidebar">
        <Filter options={filters} onChange={setFilters} />
      </div>
      <div className="explorer__main">
        <DataList
          data={filteredData(data, filters)}
          version={version}
          hasData={hasData}
        />
      </div>
    </div>
  );
};

export default Explorer;
