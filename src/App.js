import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MoodForm from "./components/MoodForm";

const App=()=> {
	return(
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" render={()=>(<MoodForm/>)}></Route>
					<Route path="/dashboard" render={()=>(<Dashboard/>)}></Route>
					<Redirect to="/"></Redirect>
				</Switch>
			</div>
		</BrowserRouter>
	);

}

export default App;