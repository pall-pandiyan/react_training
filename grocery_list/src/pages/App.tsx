import { useState } from "react";
import Button from "../components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>Hello App: {count}</h1>
      <Button
        className="btn-primary"
        color="secondary"
        onClick={(e) => console.log(e)}
      >
        Click Me!
      </Button>
    </>
  );
}

export default App;
