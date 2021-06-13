import React, { useState, useEffect } from "react";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";

const App: React.FC = (props) => {
  const [robotGallery, setRobotGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobotGallery(data);
    };
    fetchData();
  }, []);

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
};

export default App;
