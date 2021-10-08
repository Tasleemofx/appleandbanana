import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import Nav from "./components/Nav";
import links from "./data/links";
import Home from "./components/Home"
import About from "./components/About"
import Articles from "./components/Articles"

function App() {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/">
          <h3>Apple & Banana</h3>
        </Link>
        <Nav links={links} />
        <button className="waitlist">Join Book Waitlist</button>
      </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" >
            <About />
          </Route>
          <Route path="/Articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
