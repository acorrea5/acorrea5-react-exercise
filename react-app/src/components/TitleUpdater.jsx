import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  // Update the document title whenever the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    if (count == 10) {
      alert("Count is 10!");
    }
    return () => {
      console.log("Component is unmounting...");
    };
  }, [count]); // Dependency array ensures it runs only when count changes

  return (
      <div>
        <h1>Current Count: {count}</h1>
        <button onClick={() => setCount((count) => count +1)}>Increase Count</button>

        <button onClick={() => setCount((count) => count - 1)}>Decrease Count</button>
      </div>
  );
}

export default TitleUpdater;
