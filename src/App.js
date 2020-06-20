import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shows from "./pages/Shows";

function App() {
  return (
    <Container>
      <Router>
        <MenuHeader />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/shows">
            <Shows />
          </Route>

          <Route path="*">
            <NoMacth />
          </Route>
        </Switch>

        <Footer hasMenuBoxOne={false} />
      </Router>
    </Container>
  );
}

function NoMacth() {
  return "Página não encontrada!";
}

export default App;
