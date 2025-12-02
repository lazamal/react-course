import { useState } from "react";

export function IceCreamTastesSection({ tastes }) {
  const [taste, setTaste] = useState("");
  return (
    <div className="m-5">
      {tastes.map((taste) => {
        return (
          <button
            key={taste}
            className="button m-5 text-amber-200 px-4 py-2 rounded"
            onClick={() => {
              setTaste(taste);
            }}
          >
            {taste}
          </button>
        );
      })}
      {taste ? (
        <p className="mt-5 bg-white text-pink-600 hover:text-white hover:bg-pink-600 text-4xl rounded-2xl border-2 border-black w-70 m-auto">
          You chose {taste}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
