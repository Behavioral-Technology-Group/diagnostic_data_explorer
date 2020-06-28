import React, { useState, useEffect } from "react";
import "./App.css";
import DataList from "./components/DataList";
import Filter from "./components/Filter";

const fetchData = async () => {
  const id = new URLSearchParams(document.location.search.substring(1)).get(
    "id"
  );
  const apiUrl = `https://pavlok-parser.herokuapp.com?id=${id}`;
  const request = await fetch(apiUrl, { method: "POST" });
  const json = await request.json();
  return json.log;
};

const filteredData = (data, filters) => data.filter((d) => filters[d.name]);
const getDataTypes = (data) =>
  data.reduce((base, d) => {
    return { ...base, [d.name]: true };
  }, {});

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchInitialData() {
      const freshData = await fetchData();
      setData(freshData);
      setFilters(getDataTypes(freshData));
    }
    fetchInitialData();
  }, []);

  return (
    <div className="App">
      <div className="Sidebar">
        <Filter options={filters} onChange={setFilters} />
      </div>
      <div className="Main">
        <DataList data={filteredData(data, filters)} />
      </div>
    </div>
  );
}

export default App;
