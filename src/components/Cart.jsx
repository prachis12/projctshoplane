import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);

  let subTotal = 0;
  for (let each of cart) {
    subTotal += each.price;
  }

  let shippingEstimate = subTotal * 0.07;
  let taxEstimate = subTotal * 0.28;
  let orderTotal = subTotal + shippingEstimate + taxEstimate;

  return (
    <>
      <h2>CART</h2>
      <div className="mainCartDiv">
        <div className=" card row cartProductDiv">
          {cart.map((product) => (
            <CartItems key={product.id} data={product} />
          ))}
        </div>
        
        <div className="card cartSummaryDiv">
          <div>
            <div className="text-center h4">Order Summary</div>
            <div className="row subtotal">
              <p className="col-lg-6">Subtotal</p>
              <p className="col-lg-6">${subTotal.toFixed(2)}</p>
            </div>
            <div className="row shippingEstimate">
              <p className="col-lg-6 ">Shipping charges</p>
              <p className="col-lg-5">${shippingEstimate.toFixed(2)}</p>
            </div>
            <div className="row taxEstimate">
              <p className="col-lg-6 ">Tax charges</p>
              <p className="col-lg-5">${taxEstimate.toFixed(2)}</p>
            </div>
            <div className="row orderTotal">
              <p className="col-lg-6 h6 ">Total Charges</p>
              <p className="col-lg-5 h6 ">${orderTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
