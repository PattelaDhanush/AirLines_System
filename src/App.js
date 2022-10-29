import Login from "./Component/Login/Login"
import Landing from "./Component/Home/Landing"

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Booking_History from "./Component/Booking_History/Booking_History";

function App() {
  return (
    <Router>
      
      <section className="container-start">


        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Landing} />
          <Route exact path="/Booking_History" component={Booking_History} />
        </Switch>
      </section>
    </Router>

  );
}

export default App;