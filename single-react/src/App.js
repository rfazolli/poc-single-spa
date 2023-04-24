import React, { useState, useEffect } from "react";
import Parcel from "single-spa-react/parcel";
import { emitEvent } from "@rf/single-utils";
import "./App.css";

const App = () => {
  const [clickQuantity, updateClickQuantity] = useState(0);

  const handleOnClic = () => {
    updateClickQuantity((clickQuantity) => clickQuantity + 1);
  };

  useEffect(() => {
    emitEvent("@rc/event/test", { clickQty: clickQuantity });
  }, [clickQuantity]);

  return (
    <div className="container">
      <h1>Component React</h1>
      <button className="button" onClick={handleOnClic}>
        Contador
      </button>
      <br />
      <br />
      <Parcel config={() => System.import("@rf/single-parcel")} />
    </div>
  );
};

export default App;
