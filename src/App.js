import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUserContainer from "./container/CreateUserContainer"
import HomeContainer from "./container/HomeContainer"
import EditContainer from "./container/EditUserContainer"
import DetailUserContainer from "./container/DetailUserContainer"

export default class App extends Component {
  state = {
    title: "MRHDP",
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <Router>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
          </Route>
          <Route path="/create">
            <CreateUserContainer exact/>
          </Route>
          <Route path="/edit/:id" exact>
            <EditContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>          
        </Router>
      </div>
    );
  }
}
