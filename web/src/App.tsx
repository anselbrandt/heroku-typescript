import React from "react";
import useFetch from "./useFetch";

function App() {
  const [data, error] = useFetch();
  return (
    <>
      <div>Hello from React.tsx</div>
      <div>{data ? data.message : null}</div>
      <div>{error ? "API server error" : null}</div>
    </>
  );
}

export default App;
