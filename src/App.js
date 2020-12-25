import "./App.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import MyNoms from './components/MyNoms'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function App() {

  let query = useQuery()

  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route path="/summary/">
          <Nav />
          <MyNoms name={query.get('query')} />
        </Route>
        <Route exact path="/">
          <Nav />
          <Search />
        </Route>
      </Switch>
      {/* <Search /> */}
    </div>
  );
}

export default App;
