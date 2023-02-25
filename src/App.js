import "./App.css";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  const [Theme,setTheme] = useState({backgroundColor:"white",color:"black"});
  return (
    <div className="App" style={Theme}>
      <Header setTheme={setTheme} Theme={Theme} />
    </div>
  );
}

export default App;
