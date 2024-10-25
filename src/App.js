import "./App.css";
import icon from "./assets/Icon.png";
import Gridview from "./Gridview";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="header">
          <div className="heading">
            <h1>Beginnen Sie Ihre Verkaufsreise 👋</h1>
            <p>
              Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
            </p>
          </div>
          <div className="reload">
            <img src={icon} alt="reload" />
            <p>Reload</p>
          </div>
        </div>
        <Gridview />
      </div>
    </div>
  );
}

export default App;
