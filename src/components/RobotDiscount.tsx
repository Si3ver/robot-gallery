import React, { useContext } from "react";
import { appContext } from "../AppState";
import { withAddToCart } from "./AddToCart";
import { RobotProps } from "./Robot";
import styles from "./Robot.module.css";

const RobotDiscount: React.FC<RobotProps> = ({
  id,
  name,
  email,
  addToCart,
}) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button
        onClick={() => {
          addToCart(id, name);
        }}
      >
        加入购物车
      </button>
    </div>
  );
};

export default withAddToCart(RobotDiscount);
