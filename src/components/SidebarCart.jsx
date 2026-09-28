import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { cartActions } from "../store/cartSlice";

const SidebarCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || []);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);

  if (!isCartOpen) return null;

  const totalItem = cart.length;
  const DELIVERY_FEES = totalItem > 0 ? 15 : 0;

  let totalMRP = 0;
  cart.forEach((item) => {
    totalMRP += item.price * (item.quantity || 1);
  });
  let finalPayment = totalMRP + DELIVERY_FEES;

  return (
    <aside
      className="card border-start border-top-0 border-bottom-0 border-end-0 rounded-0 bg-white shadow-sm"
      style={{
        position: "sticky",
        top: "76px",
        height: "calc(100vh - 76px)",
        width: "18rem",
        minWidth: "18rem",
        zIndex: 1020,
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between p-3 h-100">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
            <h5
              className="card-title fw-bold mb-0"
              style={{ fontSize: "16px" }}
            >
              My Cart ({totalItem})
            </h5>

            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => dispatch(uiActions.toggleCart())}
            ></button>
          </div>

          {totalItem === 0 ? (
            <p className="text-muted text-center mt-5">Nothing in the Cart</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between p-2 mb-2 bg-light rounded-3 border"
              >
                <div className="d-flex align-items-center gap-2 text-truncate me-2">
                  <img
                    src={item.image}
                    alt={item.item_name}
                    style={{
                      width: "36px",
                      height: "36px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="text-truncate">
                    <div
                      className="fw-semibold text-truncate"
                      style={{ fontSize: "13px" }}
                    >
                      {item.item_name}
                    </div>

                    <div className="text-muted" style={{ fontSize: "12px" }}>
                      ₹{item.price}
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center rounded-3 px-1 py-1"
                  style={{ backgroundColor: "#f8cb46" }}
                >
                  <button
                    type="button"
                    className="btn btn-sm text-white p-0 px-2 fw-bold shadow-none"
                    onClick={() =>
                      dispatch(cartActions.decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>
                  <span
                    className="text-white fw-bold px-1"
                    style={{ fontSize: "12px" }}
                  >
                    {item.quantity || 1}
                  </span>

                  <button
                    type="button"
                    className="btn btn-sm text-white p-0 px-2 fw-bold shadow-none"
                    onClick={() =>
                      dispatch(cartActions.increaseQuantity(item.id))
                    }
                    disabled={item.quantity == 5}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="card-text">
            <div
              className="d-flex justify-content-between text-muted mb-2"
              style={{ fontSize: "14px" }}
            >
              <span>Total MRP:</span>

              <span>₹{totalMRP}</span>
            </div>

            <div
              className="d-flex justify-content-between text-muted mb-2"
              style={{ fontSize: "14px" }}
            >
              <span>Delivery Charge:</span>

              <span>₹{DELIVERY_FEES}</span>
            </div>

            <div
              className="d-flex justify-content-between fw-bold border-top pt-2"
              style={{ fontSize: "15px" }}
            >
              <span>Total Amount:</span>

              <span>₹{finalPayment}</span>
            </div>
          </div>
        </div>

        {totalItem === 0 ? (
          " "
        ) : (
          <button
            className="btn text-white w-100 py-2 fw-bold"
            style={{ backgroundColor: "#0c831f", borderRadius: "8px" }}
          >
            Place Order
          </button>
        )}
      </div>
    </aside>
  );
};

export default SidebarCart;
