import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header
      className="sticky-top bg-white border-bottom shadow-sm d-flex align-items-center"
      style={{ height: "76px", zIndex: 1040 }}
    >
      <div className="container-fluid px-3 px-lg-5 py-2 d-flex align-items-center justify-content-between gap-3">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <span className="fs-2 fw-bold" style={{ color: "#f8cb46" }}>
            blink
          </span>

          <span className="fs-2 fw-bold" style={{ color: "#0c831f" }}>
            it
          </span>
        </Link>

        <div
          className="d-none d-md-flex flex-column text-start"
          style={{ lineHeight: 1.2 }}
        >
          <span className="fw-bold" style={{ fontSize: "14px" }}>
            Delivery in 10 minutes
          </span>

          <span
            className="text-secondary text-truncate"
            style={{ fontSize: "12px", maxWidth: "180px" }}
          >
            Bhubaneswar, Odisha ▾
          </span>
        </div>

        <div
          className="flex-grow: 1 mx-2 mx-md-4"
          style={{ maxWidth: "600px" }}
        >
          <div className="input-group">
            <span className="input-group-text bg-light border-0 ps-3 text-secondary">
              <button
                className="btn text-white fw-bold d-flex align-items-center gap-2 px-3 py-2 border-0"
                style={{ backgroundColor: "#f8cb46", borderRadius: "8px" }}
              >
                Search
              </button>
            </span>

            <input
              type="search"
              className="form-control bg-light border-0 py-2 shadow-none"
              placeholder="Get milk, bread & more"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="text-decoration-none text-dark fw-semibold d-none d-sm-block">
            Login
          </div>

          <button
            className="btn text-white fw-bold d-flex align-items-center gap-2 px-3 py-2 border-0"
            style={{ backgroundColor: "#0c831f", borderRadius: "8px" }}
            onClick={() => dispatch(uiActions.toggleCart())}
          >
            <span className="d-none d-md-inline">My Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
