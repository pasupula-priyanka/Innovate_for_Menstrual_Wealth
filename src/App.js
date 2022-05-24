import React from "react"
import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

// import Home component
import Home from "./screens/Home";
import Bar from './navbar'
// import About component
import About from "./screens/About";
// import ContactUs component
import ContactUs from "./screens/contact";
import Earnbuy from "./screens/Earn";
import Education from "./screens/Education"
import Inspire from "./screens/inspire";
import Login from './screens/login';
import Buy from './screens/buy'
function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
    <Bar />
		<Switch>
		
		<Route exact path="/" component={Home} />
    <Route path="/Biodegradable_Products" component={Buy} />
		<Route path="/educate" component={Education} />
		<Route path = "/earnandbuy" component = {Earnbuy} />
		<Route path="/about" component={About} />
		<Route path="/inspire" component={Inspire} />
    <Route path="/Login"   component={Login} />
		<Route path="/contactus" component={ContactUs} />
			
		
		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;