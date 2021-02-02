import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import JobPost from "./components/JobPost"
import { Router, Route } from "react-router-dom";

function App() {
  return (
   /* <Router>
      <Route exact path='/' component={ MyNav } />
      <Route path="/job" exact render={(props) => (<JobPost {...props} />)} /> 
    </Router> */
    <div>
      <MyNav />
    </div>
  );
}

export default App;
