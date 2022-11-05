import React from "react";

const ItemCount =({inicial, stockTotal, onAdd})=>{
    let [stock, setStock] = React.useState(inicial)

    const handleChangeStockSumar = () =>{
        setStock(stock+1)
        console.log(stock)
        
      }

      const handleChangeStockRestar = () =>{
            setStock(stock-1)
            console.log(stock)

      }
    return(
        <div>
        <button disabled = {stock>=stockTotal} onClick={handleChangeStockSumar}>+</button>
        <span>{stock}</span>
        <button disabled = {stock <=inicial} onClick={handleChangeStockRestar}>-</button>
        <button  disable = {stockTotal<=0} onClick={() => onAdd(stock)}> Agregar al carrito</button>
        </div>
    );   
}
export default ItemCount