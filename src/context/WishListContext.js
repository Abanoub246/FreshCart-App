import { createContext, useState } from "react";
import axios from "axios";

export const WishListContext = createContext();

export default function WishListProvider({ children }) {
  const [isWishList, setIsWishList] = useState(false);


  const url = "https://ecommerce.routemisr.com/api/v1/wishlist";

  async function addToWishList(productId) {
    try {
      const { data } = await axios.post(
        `${url}`,
        { productId },
        { headers: { token: localStorage.getItem("token") } }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromWishList(id) {
    try {
      const { data } = await axios.delete(`${url}/${id}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getWishList() {
    try {
      const { data } = await axios.get(`${url}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        getWishList,
        removeFromWishList,
        isWishList,
        setIsWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
