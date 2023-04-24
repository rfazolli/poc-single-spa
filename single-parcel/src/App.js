import { useEffect, useState } from "react";
import { listenEvent } from "@rf/single-utils";
import "./App.css";

export default function App() {
  const [clicks, updateClicks] = useState();

  useEffect(() => {
    listenEvent("@rc/event/test", (event) =>
      updateClicks(event.detail.clickQty)
    );
  }, []);

  return (
    <section className="container-parcel">
      Component Parcel: Quantidade de clicks {clicks}
    </section>
  );
}
