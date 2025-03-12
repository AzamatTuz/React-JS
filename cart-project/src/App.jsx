import { useState } from "react";
import "./App.css"

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: "Headphones", price: 35000 },
    { id: 2, title: "Laptop", price: 350000 },
    { id: 3, title: "Phone", price: 550000 },
    { id: 4, title: "Mouse", price: 15000 },
    { id: 5, title: "Keyboard", price: 50000 },
  ];

  function addToCart(p) {
    setCart([...cart, p])
    cart.push(p)
    console.log(cart);
    // cart.push(l.target.parentElement)
    
  }

  const displayProduct = products.map((product) => 
    <div key={product.id} className="cardProduct">
      <h2>{product.title}</h2>
      <p>{product.price} тг</p>
      <button onClick={() => addToCart(product)}>To cart</button>
    </div>
  )

  const displayCart = cart.map((cart, i) => 
  
    <div key={cart.id} className="cardProduct">
      <h2>{cart.title}</h2>
      <p>{cart.price} тг</p>
      <button onClick={() => deleteToCart(i)}>Delete</button>
    </div>
  
  )

  function deleteToCart(i) {
    cart.splice(i, 1);
    console.log(i);
    
  }

  return (
    <>
    <h1>Shop</h1>
      <div className="Shop">
        {displayProduct}

      </div>

      <div className="Shop">
        {displayCart}

      </div>
    </>
  );
}
