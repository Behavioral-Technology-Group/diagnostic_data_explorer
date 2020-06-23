import React from "react";
import "./Filter.css";

const Filter = ({ options, onChange }) => {
  const keys = Object.keys(options).sort();
  const adjustState = (key) => {
    const newState = { ...options };
    newState[key] = !options[key];
    onChange(newState);
  };
  const toogleAll = (target) => {
    const newState = {};
    keys.forEach((k) => (newState[k] = target));
    onChange(newState);
  };
  const checkAll = () => toogleAll(true);
  const uncheckAll = () => toogleAll(false);

  return (
    <div className="filter__base">
      <button onClick={checkAll}>Select All</button>
      <button onClick={uncheckAll}>Unselect All</button>
      <ul className="filter__list">
        {keys.map((key) => {
          const checked = options[key] ? "checked" : null;
          return (
            <li key={key}>
              <input
                type="checkbox"
                checked={!!checked}
                onChange={() => adjustState(key)}
              />
              {key}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
