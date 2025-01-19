import { Products } from "../data/products";
import Product from "./product"

const Shop = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 gap-4 p-4">
        {Products.map((item)=> 
            <Product key={item.id} data = { item } />
            )}
      </div>
    </>
  );
};
export default Shop;
