import React, { useState, useEffect } from "react";
import "./App.css";
import Dump from "./components/Dump";
import Explorer from "./components/Explorer";
import Loading from "./components/Loading";

const fetchData = async () => {
  const id = new URLSearchParams(document.location.search.substring(1)).get(
    "id"
  );
  const apiUrl = `https://pavlok-parser.herokuapp.com?id=${id}`;
  const request = await fetch(apiUrl, { method: "POST" });
  const json = await request.json();
  return json;
};

const getDataTypes = (data) =>
  data.reduce((base, d) => {
    return { ...base, [d.name]: true };
  }, {});

const calculateUseRaw = () =>
  new URLSearchParams(document.location.search.substring(1)).get("debug");

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);
  const [version, setVersion] = useState("unknown");
  const [raw, setRaw] = useState({});
  const [curState, setCurState] = useState("default");
  // const [useRaw, setUseRaw] = useState("false");

  useEffect((useRaw) => {
    async function fetchInitialData(useRaw) {
      setCurState("loading");
      const response = await fetchData();
      const { log, version } = response;
      setCurState(useRaw === "true" ? "dump" : "explore");
      setData(log);
      setVersion(version);
      setFilters(getDataTypes(log));
      setRaw(response);
    }
    fetchInitialData(calculateUseRaw());
  }, []);

  const states = {
    loading: <Loading />,
    dump: <Dump raw={raw} version={version} />,
    explore: (
      <Explorer
        filters={filters}
        setFilters={setFilters}
        data={data}
        version={version}
      />
    ),
  };
  return <div className="App">{states[curState]}</div>;
}

export default App;
