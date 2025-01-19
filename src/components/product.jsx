import { useContext, useState } from "react";
import { shopContext } from "../context/shopContext";

const Product = (props) => {

    const { id, productName, price, productImage } = props.data;

    const { cartItems , addToCart , removeFromCart } = useContext ( shopContext );

    const isInCart = cartItems?.some( (item) => item.id === id );

    const item = cartItems?.find((row) => row.id === id);
  
    return (

      <div className="bg-gray-300 grid-cols-4 border p-4 text-center">

        <img src={productImage} className="w-auto h-40 mx-auto" alt={productName} />

        <h2 className="text-lg font-semibold">{productName}</h2>

        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>

        <div className="flex justify-center items-center mt-2">

          <button className="px-2 py-1 bg-indigo-700 text-white rounded" 
          onClick = { () => addToCart (id) } >+</button>

        <span className="mx-4">
            {item?.count !== undefined && item.count}
        </span>

          { isInCart && <button className="px-3 py-1 bg-red-700 text-white rounded" onClick={() => removeFromCart (id)}>-</button> }

        </div>
      </div>
    );
  };
  
export default Product;