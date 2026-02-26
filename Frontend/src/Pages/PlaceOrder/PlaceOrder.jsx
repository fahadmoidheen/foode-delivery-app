import React from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => { 


    const { getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2>Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>
        <div>
          <input type="text" placeholder="Address" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

      </div>
      <div className="place-order-right">
        <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
