import { createContext,useState,useContext, useEffect } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([]);
    const BASE_URL = "https://crudcrud.com/api/1d1179e356274022ac9c006115255caa";
   


useEffect(() => {
  
  const fetchCart = async () => {
     const userEmail = localStorage.getItem("email");
const cleanedEmail = userEmail?.replace(/[@.]/g, "");
if(!cleanedEmail) return;
    try {
      const res = await fetch(`${BASE_URL}/cart${cleanedEmail}`);
      const data = await res.json();

      setCartItems(data);
    } catch (err) {
      console.log("Error fetching cart:", err);
    }
  };

  fetchCart();
}, []);
   const addToCart = async (product) => {
     const userEmail = localStorage.getItem("email");
const cleanedEmail = userEmail?.replace(/[@.]/g, "");
  try {
    await fetch(`${BASE_URL}/cart${cleanedEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        quantity: 1,
      }),
    });

    // update UI state
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === product.title);

      if (existing) {
        return prev.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  } catch (err) {
    console.log("Error adding to cart:", err);
  }
};
    const removeFromCart=(product)=>{
        setCartItems(prev=>prev.filter(item=> item.title !== product.title))
    }
      const increaseQty = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

 
  const decreaseQty = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
    value={{cartItems,addToCart,removeFromCart,increaseQty,decreaseQty}}
    >
        {children}
    </CartContext.Provider>
  )
}

export const useCart=()=>useContext(CartContext);