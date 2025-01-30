import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  // Update the document title whenever the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array ensures it runs only when count changes

  return (
      <div>
        <h1>Current Count: {count}</h1>
        <button onClick={() => {}}>Increase Count</button>
      </div>
  );
}

export default TitleUpdater;
