import { useRef, useState } from "react";
import Child, { ChildHandle } from "./Child";

function App() {
  const [num, setNum] = useState(0);
  const ref = useRef<ChildHandle>(null);
  return (
    <>
      <Child ref={ref} />
      <button
        onClick={() => {
          ref.current?.focus(num);
        }}
      >
        FOCUS
      </button>
      <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
    </>
  );
}

export default App;
