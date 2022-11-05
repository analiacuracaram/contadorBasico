import React from "react";
import ItemCount from "./ItemCount";
import "./styles.css";

export default function ItemListContainer({ greeting, cantidad }) {
const onAdd = (cantidad) =>{
 console.log(cantidad)


}

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemCount inicial={1} stockTotal={10} onAdd={onAdd}/>
    </div>
    
  );
}
