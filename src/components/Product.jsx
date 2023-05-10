
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Slice/CartSlice";

function Product(props) {
  const { id, title, price, description, category, image, rating } = props.data;

  let productPrice = price;

  const heart = useRef();
  const atcBtn = useRef();

  function handleHeartClick() {
    heart.current.classList.toggle("heartColor");
    dispatch(addToWishlist(props.data));
  }

  const dispatch = useDispatch();
  function handleATCclick() {
    dispatch(addToCart(props.data));
  }

  return (
    <>
      <div style={{ margin: "1rem" }} className="col-xs-auto">
        <div className="card h-100" style={{ width: "14.7rem" }}>
          <div
            onClick={handleHeartClick}
            ref={heart}
            className="productHeartDivContainer"
          >
            <AiOutlineHeart className="productHeart" />
          </div>
          <div className="imageContainingDiv">
            <Link to={"/products/" + id}>
              <img
                src={image}
                className="card-img-top productImgMain"
                alt={title}
              />
            </Link>
          </div>
          <div className="card-body">
            <h6 style={{ display: "flex", gap: "0.2rem" }}>
              Brand,
              <p className="card-title allProductTitle">{title}</p>
            </h6>
            
            <p>{rating.rate} <span>{"("}{rating.count}{" reviews)"}</span></p>
            <div className="productPriceDiv">
              <p className="mainPrice">${productPrice}</p>
            </div>
            <button
              onClick={handleATCclick}
              ref={atcBtn}
              className="btn btn-info"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
