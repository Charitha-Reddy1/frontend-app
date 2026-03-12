import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";


const API_URL=import.meta.env.VITE_API_URL

function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };
  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0),
    );
  }, [cart]);

  return (
    <>
    <style>
        {`
        .box{
        display:flex;
        border:1px solid gray;
        padding:5px;
        margin:5px;
        }
        
        
        `}
      </style>
      
    <div style={{ background: "linear-gradient(rgb(38, 220, 50),white,lightblue)" }}>
      <h1>My Cart</h1>
      <ol>
        {cart.map((item) => (
          <li key={item._id}>
            <img src={`${API_URL}/${item.imageUrl}`} 
                    width="300px" alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <h4>{item.price}</h4>
            <button onClick={() => decrement(item._id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item._id)}>+</button>
           <p> {item.quantity * item.price}</p>
          </li>
        ))}
      </ol>
      <p>
        <strong>Order Value:{orderValue}</strong>
      </p>
      <p>
        <button >Place Order</button>
      </p>
    </div>
    </>
  );
}
export default Cart;