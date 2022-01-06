import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

function App() {
  return (
    <Router>
      <div className="App relative">
        <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-row items-center space-x-3">
          <Link to="/">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </div>
        <Switch>
          <Route path="/" exact component={() => <Page1 />} />
          <Route path="/page2" exact component={() => <Page2 />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;