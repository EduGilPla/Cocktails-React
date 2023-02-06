import { MoviesGrid } from "./MoviesGrid";
import styles from "../css/App.module.css"

function App(){
  return (<div>
    <header>
      <h1 className={styles.title}>Movies</h1>
    </header>
    <main>
      <MoviesGrid/>    
    </main>
  </div>);
}

export default App;