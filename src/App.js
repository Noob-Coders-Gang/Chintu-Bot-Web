import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Commands from "./components/Commands";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const loader = document.querySelector(".loading");
const hideLoader = () => loader.classList.add("d-none");

function App() {
  const [serverCount, setServerCount] = useState(0);
  const url =
    "https://jsonblob.com/api/jsonBlob/53780253-693c-11eb-b382-45923ea53bb5";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setServerCount(data.total_servers))
      .catch((error) => setServerCount(69));
    hideLoader();
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home serverCount={serverCount} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/commands">
            <Commands />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
