import "./styles.scss";
import image from "./image.jpg";

const D = () => {
  return <h1>moaml riad from the react projects</h1>;
};
function App() {
  return (
    <h1>
      This is project created by webpack and reactjs
      <img src={image} />
    </h1>
  );
}

export default App;
