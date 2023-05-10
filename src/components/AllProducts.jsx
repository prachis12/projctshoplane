import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="row allProductsRow">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default AllProducts;
