import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <div>
        <div className="row">
          <header className="App-header border">
            <h1>DICTIONARY</h1>
            <form>
              <input
                type="text"
                placeholder="Search a word"
                className="col-6"
              />
              <input type="submit" value="Search" className="col-2" />
            </form>
            <br />
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
