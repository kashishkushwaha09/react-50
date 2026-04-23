import { createContext,useState,useContext } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([]);

    const addToCart=(product)=>{
        setCartItems((prev)=>{
            const existing=prev.find((item)=>item.title === product.title);

            if(existing){
                return prev.map((item)=>item.title===product.title ? {...item, quantity:item.quantity+1}: item);
            }
            return [...prev,{...product, quantity:1}]
        })
    }
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