import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import  PagesOla  from "./ola";
import  PagesCalculadora  from "./calculadora";

export default function App() {
  return (
    
    <Router>

      <Switch>

        <Route path='/ola'>
          <PagesOla />
        </Route>
        
        <Route path='/calculadora'>
          <PagesCalculadora />
        </Route>

        <Redirect from='/' to='/ola' />

      </Switch>

    </Router>

  );
}
