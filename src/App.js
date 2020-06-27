import React, { useState, useEffect } from "react";
import "./App.css";
import DataList from "./components/DataList";
import Filter from "./components/Filter";

const fetchData = async () => {
  const id = window.location.search.split("=")[1];
  const apiUrl = `https://pavlok-parser.herokuapp.com?id=${id}`;
  const request = await fetch(apiUrl, { method: "POST" });
  const json = await request.json();
  return json.log;
};

const filteredData = (data, filters) => data.filter((d) => filters[d.name]);

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchInitialData() {
      const freshData = await fetchData();
      setData(freshData);
      setFilters(
        freshData.reduce((base, d) => {
          return { ...base, [d.name]: true };
        }, {})
      );
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
