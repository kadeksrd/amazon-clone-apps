import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
