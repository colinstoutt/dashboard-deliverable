import "./App.css";
import Aside from "./components/aside";
import Reviews from "./components/reviews";
import Rating from "./components/rating";
import Analysis from "./components/analysis";
import Visitors from "./components/visitors";

function App() {
  return (
    <div className="App">
      <Aside />
      <Reviews />
      <Rating />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default App;
