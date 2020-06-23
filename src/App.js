import React, { useState } from "react";
import "./App.css";
import baseData from "./baseData";
import DataList from "./components/DataList";
import Filter from "./components/Filter";

const buildBaseFilters = () => {
  return baseData.log.reduce((base, d) => {
    return { ...base, [d.name]: true };
  }, {});
};

const filterData = () => {
  const data = baseData.log;
  const cache = {};

  return (filters) => {
    const key = JSON.stringify(filters);
    if (!cache[key]) {
      console.log("calculating cache");
      cache[key] = data.filter((d) => filters[d.name]);
    }

    return cache[key];
  };
};

const filteredData = filterData();

function App() {
  const [filters, setFilters] = useState(buildBaseFilters());

  return (
    <div className="App">
      <div className="Sidebar">
        <Filter options={filters} onChange={setFilters} />
      </div>
      <div className="Main">
        <DataList data={filteredData(filters)} />
      </div>
    </div>
  );
}

export default App;
