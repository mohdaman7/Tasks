import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const products = [
  { id:1, name: "Laptop", brand: "Dell", qty: 1 },
  { id:2, name: "Laptop", brand: "HP", qty: 1 },
  { id:3, name: "Laptop", brand: "Lenovo", qty: 1 },
];

const Keys = () => {
    const [items,setItem] = useState(products);

    const changeQty = (id) => {
        const newItem = items.map((item)=>
            item.id === id?{...item, qty: item.qty+1}:item
        );
        setItem(newItem)
    };

  return (
    <div>
      {items.map((products) => (
        <div className="bg-success text-white m-2" key={products.id}>
          <h1>{products.name}</h1>
          <h3>{products.brand}</h3>
          <h4>{products.qty}</h4>
          <Button onClick={()=>changeQty(products.id)} type="button">+</Button>
        </div>
      ))}
    </div>
  );
};

export default Keys;

