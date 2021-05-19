import "./styles.scss";
import image from "./image.jpg";
import { useState } from "react";

const D = () => {
  return <h1>moaml riad from the react projects</h1>;
};
function App() {
  const [x, setX] = useState(" webpack ");

  return (
    <h1>
      This is created by webpack : {x}
      <img onClick={() => setX("clicked  is new state")} src={image} />
    </h1>
  );
}

export default App;
