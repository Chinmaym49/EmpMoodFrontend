
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App=()=> {
	return(
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" render={()=>(<Dashboard/>)}></Route> {/* TODO: Change Dashboard to MoodForm */}
					<Route path="/dashboard" render={()=>(<Dashboard/>)}></Route>
					<Redirect to="/"></Redirect>
				</Switch>
			</div>
		</BrowserRouter>
	);

}

export default App;