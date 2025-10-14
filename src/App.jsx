import { useState } from "react";
import { Button } from "@/components/ui/button";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Zilla Home Page</h1>
      <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default App;
