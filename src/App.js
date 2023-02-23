import React from "react";

import ButtonSection from "./buttons/buttonSection";
import LoaderSection from "./loaders/loaderSection";
import InputFieldsSection from "./input-fields/inputFieldsSection";
import FormSection from "./forms/formSection";
import "./App.css";
function App() {
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
    </div>
  );
}

export default App;
