import React from "react";
import Card from "./card";
import SimpleCard from "./simpleCard";

const CardSection = () => {
  const handleClick = () => {
    console.log("handle button click");
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Cards</h1>

      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div style={{ marginRight: 50 }}>
          <Card
            imageSrc="https://images.unsplash.com/photo-1547219469-75c19c0bd220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            descriptionText="Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text
         ever since the 1500s."
            onButtonClick={handleClick}
          />
        </div>
        <div style={{ marginRight: 50 }}>
          <SimpleCard
            onButtonClick={handleClick}
            imageSrc="https://images.unsplash.com/photo-1547219469-75c19c0bd220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            imgOverlayText="Overlay text"
            headerText="This is header"
            descriptionText="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s."
            title="Title here"
            buttonTitle="Click me"
            buttonTitleColor="white"
            buttonBgColor="#3b71ca"
            footerTextColor=""
            footerText="Footer is really good"
            list={["list item 1", "list item 2", "list item 3"]}
            links={[
              {
                linktitle: "Link",
                onClick: () => console.log("link one cliked"),
              },
              {
                linktitle: "Another link",
                onClick: () => console.log("link two clicked"),
              },
            ]}
          />
        </div>
        <div style={{ margin: "50px" }}>
          <SimpleCard
            imageSrc="https://images.unsplash.com/photo-1547219469-75c19c0bd220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            imgOverlayText="Overlay text"
            links={[
              {
                linktitle: "Link",
                onClick: () => console.log("link one cliked"),
              },
              {
                linktitle: "Another link",
                onClick: () => console.log("link two clicked"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
