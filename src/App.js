import "./App.css";
import UserList from "./UserList";
import UserInfo from "./UserInfo";
import CreateUser from "./CreateUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList}></Route>
          <Route path="/userinfo/:id" component={UserInfo}></Route>
          <Route path="/usercreate" component={CreateUser}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
