import { lazy, Suspense, useEffect } from "react";
import { numberState, counterState } from "./store";

import { useRecoilValue } from "recoil";
import Router from "./router";
const App = () => {
  const number = useRecoilValue(numberState);
  const fungsi = useRecoilValue(counterState);
  const pencet = () => {
    fungsi();
    console.log(number);
  };
  return (
    <Suspense fallback="Loading...">
      <Suspense fallback="Loading...">
        <h1>{number}</h1>
        <button onClick={pencet}>tambah</button>
        <Router />
      </Suspense>
    </Suspense>
  );
};

export default App;
