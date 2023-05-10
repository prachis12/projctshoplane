import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../Slice/CartSlice";

function WishlistItems(props) {
  const { id, title, price, description, category, image, rating } = props.data;

  let productPrice = price;

  const dispatch = useDispatch();

  const handleRemoveItemFromWish = () => {
    dispatch(removeFromWishlist(props.data));
  };

  return (
    <>
      <div className="cartDiv">
        <div className="imageDiv">
          <img src={image} alt={title} />
        </div>
        <div className="contentDiv">
          <div>
            <h6>
              {category.toUpperCase()}
              <p style={{ color: "grey" }}>{title}</p>
            </h6>
          </div>
          <div className="priceDiv">
            <div className="productPriceDiv">
              <p className="mainPrice">${productPrice}</p>
            </div>
          </div>
          <div className="deleteBtnDivContainer">
            <div>
              <a
                onClick={handleRemoveItemFromWish}
                style={{ cursor: "pointer", color: "red" }}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WishlistItems;
