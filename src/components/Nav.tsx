import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
 const cartProducts = useSelector((state:any) => state.cartProducts)
  return (
    <div className="nav">
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus">
        Cart:{""}
        <span className="navCartCount">{cartProducts.length}</span>
        <Link to="/checkout">
        <button className="navCartCheckout">Checkout</button>
        </Link>
      
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
