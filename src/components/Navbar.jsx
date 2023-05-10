import { VscAccount } from "react-icons/vsc";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="navbarComp ">
      <Link to={"/"} style={{ textDecoration: "none" }} className="shopWord">
        SHOPLANE
      </Link>
      <div className="navbarRight">
        <div className="dropdown ">
          <button
            className="btn dropdown-toggle dropDownBtn"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="dropDownBtnContent">
              <VscAccount size={"40px"} />
              <div className="loginSignUp">
                <span>Login</span>
                <span style={{ fontSize: "12px" }}>or Sign Up</span>
              </div>
            </div>
          </button>

          <div className="dropdown-menu">
            <Link to={"/login"} className="dropdown-item" href="#">
              Login
            </Link>
            <Link to={"/signup"} className="dropdown-item">
              Sign Up
            </Link>
            <Link to={"/cartPage"} className="dropdown-item">
              Cart
            </Link>
            <Link to={"/favorites"} className="dropdown-item">
              Favorites
            </Link>
          </div>
        </div>

        <div>
          <Link to={"/cartPage"} className="navbarCartDiv">
            <div>
              <BsFillCartCheckFill color="black" size={"2.5rem"} />
            </div>
            <div className={cart.cartItems.length > 0 ? "cartLengthDiv" : null}>
              <span className="cartLengthSpan">
                {cart.cartItems.length > 0 ? cart.cartItems.length : null}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
