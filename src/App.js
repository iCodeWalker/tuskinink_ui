import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

import ButtonSection from "./buttons/buttonSection";
import LoaderSection from "./loaders/loaderSection";
import InputFieldsSection from "./input-fields/inputFieldsSection";
import FormSection from "./forms/formSection";
import "./App.css";
import Select from "./select/select";
import Modal from "./models/modal";

import CardSection from "./cards/cardSection";
import FloatingActionButton from "./floating-action-button.js'/floatingActionButton";
import FabSection from "./floating-action-button.js'/fabSection";
import Accordion from "./accordion/accordion";

function App() {
  const [selectValue, setSelectValue] = useState("");

  const handleSelectValue = (val) => {
    setSelectValue(val);
  };

  console.log("I'm from App.js", selectValue);

  return (
    <div style={{ margin: 20 }}>
      <ButtonSection />
      <LoaderSection />

      <div style={{ width: "400px" }}>
        <InputFieldsSection />
      </div>
      <div style={{ width: "90vw" }}>
        <FormSection />
      </div>
      <div
        style={{
          margin: "10px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f1f1f",
        }}
      >
        <Select
          selectables={["Indore", "pune", "bhopal", "surat", "delhi", "bombay"]}
          iconSelector={true}
          handleSelectValue={handleSelectValue}
        />
      </div>
      <div style={{ margin: "10px", padding: "20px" }}>
        <Modal />
      </div>

      <div style={{ margin: "10px", padding: "20px" }}>
        <CardSection />
      </div>

      <div style={{ margin: "10px", padding: "20px" }}>
        <FabSection />
      </div>

      <div style={{ margin: "10px", padding: "20px" }}>
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
}

export default App;
