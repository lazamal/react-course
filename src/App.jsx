import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { IceCreamResult } from "./components/IceCreamResult";
import { IceCreamTastesSection } from "./components/IceCreamTastesSection";
import { AppLayout } from "./layout/AppLayout";

function App() {
  const [cupOrCone, setCupOrCone] = useState("");

  const tastes = ["vanila", "chocolate", "banana", "yummy"];

  return (
    <>
      <AppLayout>
        <AppHeader />
        <IceCreamResult cupOrCone={cupOrCone} />
        <div className="container m-5">
          <button
            className="button"
            style={{ margin: 5 }}
            onClick={() => {
              setCupOrCone("cup");
            }}
          >
            serve in cup
          </button>
          <button
            className="button"
            style={{ margin: 5 }}
            onClick={() => {
              setCupOrCone("cone");
            }}
          >
            serve in cone
          </button>
          <p className="m-5">
            {cupOrCone ? `the ice cream comes in ${cupOrCone}` : ""}
          </p>
        </div>
        <IceCreamTastesSection tastes={tastes} />
      </AppLayout>
    </>
  );
}

export default App;
