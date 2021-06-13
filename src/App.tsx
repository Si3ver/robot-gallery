import robots from "./mock/rotobs.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="logo" />
        <h1>老铁，买个🤖️给小朋友玩不？</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map(({ id, name, email }) => (
          <Robot id={id} name={name} email={email} />
        ))}
      </div>
    </div>
  );
}

export default App;
