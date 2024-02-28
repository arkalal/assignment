import React from "react";
import Card from "./Card/Card";
import { data } from "./data";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Card
              name={item.name}
              email={item.email}
              phone={item.phone}
              website={item.website}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
