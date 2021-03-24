import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cadastrar from "./cadastrar/cadastrar";
import Leituras from "./leituras/leituras";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            Faz de conta que é um logo
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
            <li>
              <Link to="/leituras">Leituras</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/cadastrar">
              <Cadastrar></Cadastrar>
            </Route>
            <Route path="/leituras">
              <Leituras></Leituras>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


