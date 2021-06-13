import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

// 自定义HOC
export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  return (props) => {
    const setState = useContext(appSetStateContext);

    const addToCart = (id, name) => {
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

    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

// 自定义Hook
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
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

  return addToCart;
};
