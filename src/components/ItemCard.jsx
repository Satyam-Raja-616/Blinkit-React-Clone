import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart || []);

  const isInCart = cart.some((cartItem) => cartItem.id === item.id);

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(cartActions.removeFromCart(item.id));
    } else {
      dispatch(cartActions.addToCart(item));
    }
  };
  return (
    <div className="col-12 col-md-4">
      <div className="card h-100 border rounded-4 p-3 shadow-sm d-flex flex-column justify-content-between">
        <div>
          <div
            className="position-relative text-center mb-3"
            style={{ height: "180px" }}
          >
            <span
              className="badge bg-light text-secondary position-absolute top-0 start:0 border"
              style={{ fontSize: "11px" }}
            >
              10 MINS
            </span>

            <img
              src={item.image}
              className="h-100 w-100"
              style={{ objectFit: "contain" }}
              alt={item.item_name}
            />
          </div>

          <h5 className="fw-semibold text-truncate mb-1">{item.item_name}</h5>

          <p className="text-muted mb-3" style={{ fontSize: "13px" }}>
            {item.volume || " "}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-2 border-top">
          <span className="fw-bold fs-5">₹{item.price}</span>

          {item.availability === "inStock" ? (
            <button
              type="button"
              className="btn fw-bold px-4 py-2"
              style={{
                color: isInCart ? "#dc3545" : "#0c831f",
                borderColor: isInCart ? "#dc3545" : "#0c831f",
                backgroundColor: isInCart ? "#fff5f5" : "#f7fff9",
                borderRadius: "8px",
              }}
              onClick={handleToggleCart}
            >
              {isInCart ? "REMOVE" : "ADD"}
            </button>
          ) : (
            <span className="badge bg-secondary-subtle text-secondary border px-3 py-2 fw-semibold">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
