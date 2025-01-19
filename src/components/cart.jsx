import { useContext } from "react";
import { Products } from "../data/products";
import { shopContext } from "../context/shopContext";
import Product from "./product";

const Cart = () => {
  const { cartItems , resetCart } = useContext(shopContext);

  const filteredProducts = Products.filter((p) =>
    cartItems?.some((i) => i.id === p.id && i.count > 0)
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <Product key={p.id} data={p}></Product>)
        ) : (
            <div className="flex items-center justify-center h-96">
                <p className="text-center text-3xl text-gray-800 bg-purple-300 p-6 rounded-lg shadow-lg  transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
                    Your Cart Is Empty!
                </p>
            </div>
        )}
      </div>
      <button className="m-4 px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300" onClick={resetCart}> Reset </button>
    </>
  );
};

export default Cart;