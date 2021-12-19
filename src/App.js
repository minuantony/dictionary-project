import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>

      <Dictionary />
      <footer>
        {" "}
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/minu-antony-30806036"
          target="_blank"
          rel="noreferrer"
        >
          Minu Antony
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/minuantony/dictionary-project.git"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://mystifying-clarke-13e206.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
