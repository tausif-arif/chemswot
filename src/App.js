import { BrowserRouter,Switch,Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/resources"  component={Resources}/>
        <Route exact path="/about"  component={About}/>
        <Route exact path="/contact"  component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
