import React from "react";
// import { createUseStyles } from "react-jss";
import jss, { SheetsRegistry } from "jss";
import global from "jss-plugin-global";
import "./App.css";

jss.use(global());

// const useStyles = createUseStyles({});

const sheet = jss.createStyleSheet({
  "@global": {
    ".blx-button": {
      width: 100,
      height: 100,
      color: "green",
      background: "red"
    }
  }
});

const sheets = new SheetsRegistry();
sheets.add(sheet);
const styleSheet = sheets.toString();

sheet.attach();

console.log(styleSheet, sheet);

function App() {
  // const classes = useStyles();
  // console.log(classes);
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" className="blx-button">
          My Button
        </button>
      </header>
    </div>
  );
}

export default App;
