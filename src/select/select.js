import React, { useEffect, useState } from "react";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./select.css";

const Select = ({ selectables, iconSelector, handleSelectValue }) => {
  const [value, setValue] = useState("Select one");
  const [open, setOpen] = useState(false);

  const handleSelect = (val) => {
    setValue(val);
    setOpen(false);
  };

  const onButtonClick = () => {
    setOpen((preValue) => !preValue);
  };

  useEffect(() => {
    handleSelectValue(value);
  }, [value]);

  return (
    <div className="wrapper">
      <div
        onClick={onButtonClick}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div className={`button ${iconSelector ? "button-icon-selector" : ""}`}>
          {value}
        </div>
        {iconSelector &&
          (open ? (
            <i>
              <AiOutlineArrowUp size={16} />
            </i>
          ) : (
            <i>
              <AiOutlineArrowDown size={16} />
            </i>
          ))}
      </div>

      {open && (
        <div
          className={`content ${iconSelector ? "content-icon-selector" : ""}`}
        >
          {selectables.map((item, id) => {
            return (
              <div key={id} onClick={() => handleSelect(item)}>
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
