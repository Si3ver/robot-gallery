import { Component } from "react";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";

interface Props {}

interface State {
  robotGallery: any[];
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    const { robotGallery } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt="logo" />
          <h1>老铁，买个🤖️给小朋友玩不？</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {robotGallery.map(({ id, name, email }) => (
            <Robot key={id} id={id} name={name} email={email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
