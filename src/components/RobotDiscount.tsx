import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);

  const addToCart = () => {
    if (setState) {
      setState((prevState) => {
        return {
          ...prevState,
          shoppingCart: {
            items: [...prevState.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default Robot;
