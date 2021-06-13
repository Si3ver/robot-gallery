import robots from "./mock/rotobs.json";
import Robot from "./components/Robot";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map(({ id, name, email }) => (
          <Robot id={id} name={name} email={email} />
        ))}
      </div>
    </div>
  );
}

export default App;
