import "./styles.scss";
import image from "./image.jpg";

const D = () => {
  return <h1>moaml riad from the react projects</h1>;
};
function App() {
  return (
    <h1>
      Ohhh my god <D></D>
      <img src={image} />
    </h1>
  );
}

export default App;
