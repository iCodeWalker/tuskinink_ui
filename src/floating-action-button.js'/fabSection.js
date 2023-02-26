import React from "react";
import { FaUser, FaPen } from "react-icons/fa";
import FloatingActionButton from "./floatingActionButton";

const FabSection = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Floating Action Button</h1>

      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FloatingActionButton icon={<FaUser size={18} />} />
        <div style={{ margin: "15px" }}></div>
        <FloatingActionButton
          textContent="Add User"
          icon={<FaUser size={18} />}
        />
        <div style={{ margin: "15px" }}></div>
        <FloatingActionButton
          icon={<FaPen size={18} />}
          iconColor="blue"
          bgColor="yellow"
        />
      </div>
    </div>
  );
};

export default FabSection;
