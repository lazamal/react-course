import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { IceCreamResult } from "./components/IceCreamResult";

function App() {
  const [cupOrCone, setCupOrCone] = useState("cone");
  const [taste, setTaste] = useState("");

  const tastes = ["vanila", "chocolate", "banana"];

  return (
    <>
      <AppHeader />
      <IceCreamResult cupOrCone={cupOrCone} tastes={tastes} />
      <div className="container">
        <button
          style={{ margin: 5 }}
          onClick={() => {
            setCupOrCone("cup");
          }}
        >
          serve in cup
        </button>
        <button
          style={{ margin: 5 }}
          onClick={() => {
            setCupOrCone("cone");
          }}
        >
          serve in cone
        </button>
        <p>the ice cream comes in {cupOrCone}</p>
      </div>

      <div className="tastes">
        {tastes.map((taste) => {
          return (
            <button
              key={taste}
              style={{ margin: 5 }}
              onClick={() => {
                setTaste(taste);
              }}
            >
              {taste}
            </button>
          );
        })}
        <p>the ice cream will be served in {taste}</p>
      </div>
    </>
  );
}

export default App;
