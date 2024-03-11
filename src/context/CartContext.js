import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [cartId, setCartId] = useState(null);

  const url = "https://ecommerce.routemisr.com/api/v1/cart";

  async function addToCart(productId) {
    try {
      const { data } = await axios.post(
        `${url}`,
        { productId },
        { headers: { token: localStorage.getItem("token") } }
      );
      setNumOfCartItems(data.numOfCartItems);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getCart() {
    try {
      const { data } = await axios.get(`${url}`, {
        headers: { token: localStorage.getItem("token") },
      });
      setNumOfCartItems(data.numOfCartItems);
      setCartId(data.data._id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromCart(id) {
    try {
      const { data } = await axios.delete(`${url}/${id}`, {
        headers: { token: localStorage.getItem("token") },
      });
      setNumOfCartItems(data.numOfCartItems);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function clearCart() {
    try {
      const { data } = await axios.delete(`${url}`, {
        headers: { token: localStorage.getItem("token") },
      });
      setNumOfCartItems(0);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProductQuantity(id, count) {
    try {
      const { data } = await axios.put(
        `${url}/${id}`,
        { count },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        numOfCartItems,
        getCart,
        removeFromCart,
        clearCart,
        updateProductQuantity,
        cartId,
        setNumOfCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
