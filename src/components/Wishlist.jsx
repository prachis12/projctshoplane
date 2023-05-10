import { useSelector } from "react-redux";
import WishlistItems from "./WishlistItems";

function Wishlist() {
  const wishlist = useSelector((state) => state.cart.wishListItems);

  return (
    <>
      <h2>WISHLIST</h2>
      <div className="mainCartDiv">
        <div className="card row cartProductDiv">
          {wishlist.map((product) => (
            <WishlistItems key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Wishlist;
