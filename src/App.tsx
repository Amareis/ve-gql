import { useState, useEffect } from "react";
import { chars } from "./gql";
import { resolved } from "./gqless";

export const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    resolved(chars).then((c) => {
      setState(c);
    });
  }, []);
  return (
    <>
      {state.map((c) => (
        <div>{c}</div>
      ))}
    </>
  );
};
