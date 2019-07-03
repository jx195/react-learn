import React from "react";
import ReactDOM from "react-dom";

import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import ComponentIndexBody from "./components/IndexBody";

function App() {
  var component = <ComponentHeader />;
  return (
    <div>
      {component}
      <ComponentIndexBody username={"nick"} />
      <ComponentFooter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
