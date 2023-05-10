import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Endpoints from "../Endpoints";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../Slice/CartSlice";

function ProductDetail(props) {
  const cart = useSelector((state) => state.cart);
  const id = props.data;
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL + id)
      .then((response) => {
        setProduct(response.data);
        setRating(response.data.rating);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  let price = product.price;

  const heart = useRef();
  const atcBtn = useRef();
  const dispatch = useDispatch();

  function handleHeartClick() {
    heart.current.classList.toggle("heartColor");
    dispatch(addToWishlist(product));
  }

  function handleATCclick() {
    dispatch(addToCart(product));
  }

  return (
    <>
      <div className="productDetailDiv">
        <div className=" card productDetailImageDiv">
          <img
            src={product.image}
            className="card-img-top productDetailImg"
            alt={product.title}
          />
        </div>

        <div className="productDetailContentDiv">
          <h2 className="productDetailTitle">{product.title}</h2>
          <p>{rating.rate} <span>{"("}{rating.count}{" reviews)"}</span></p>
          <div className="productDetailDescription">{product.description}</div>
          <hr />
          <div className="productDetailContent2">
            <div className="productDetailContent2Left">
              <p className="mainPrice">${price}</p>
            </div>
            <div className="productDetailContent2Right">
              <div>
                <button
                  onClick={handleATCclick}
                  ref={atcBtn}
                  className="btn btn-info"
                >
                  Add to Cart
                </button>
              </div>
              <div onClick={handleHeartClick} ref={heart}>
                <AiOutlineHeart
                  className="detailedProductHeart"
                  size={"1.8rem"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
