import React from "react";

const Dump = (json) => {
  return <p>{JSON.stringify(json)}</p>;
};

export default Dump;
