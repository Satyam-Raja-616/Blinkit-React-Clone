import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  if (category.id == 1) {
    return (
      <div className="col-12 col-md-4">
        <Link to={"/cold-drinks"} className="text-decoration-none">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-light">
            <div
              className="bg-white p-3 d-flex align-items-center justify-content-center"
              style={{ height: "200px" }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="img-fluid w-100 h-100 rounded-3"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="card-body text-center py-3">
              <h5 className="card-title fw-bold text-dark mb-0">
                {category.title}
              </h5>
            </div>
          </div>
        </Link>
      </div>
    );
  } else if (category.id == 2) {
    return (
      <div className="col-12 col-md-4">
        <Link to={"/groceries"} className="text-decoration-none">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-light">
            <div
              className="bg-white p-3 d-flex align-items-center justify-content-center"
              style={{ height: "200px" }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="img-fluid w-100 h-100 rounded-3"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="card-body text-center py-3">
              <h5 className="card-title fw-bold text-dark mb-0">
                {category.title}
              </h5>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="col-12 col-md-4">
        <div className="text-decoration-none">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-light">
            <div
              className="bg-white p-3 d-flex align-items-center justify-content-center"
              style={{ height: "200px" }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="img-fluid w-100 h-100 rounded-3"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="card-body text-center py-3">
              <h5 className="card-title fw-bold text-dark mb-0">
                {category.title}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
