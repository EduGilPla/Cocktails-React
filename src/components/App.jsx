import { MovieDetails } from "../pages/MovieDetails";
import styles from "../css/App.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

function App(){
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        <Link to="/movies/:movieId"></Link>
      </header>
      <main>
      <Switch>
        <Route exact path="/movies/:movieId"><MovieDetails /></Route>
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/">No existe maestro</Route>
      </Switch>
      </main>
    </Router>
  );
}

export default App;