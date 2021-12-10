import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Minu Antony, open-sourced on Git-Hub and hosted in Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}
