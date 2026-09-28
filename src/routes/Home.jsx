import CategoryCard from "../components/CategoryCard";
import { useSelector } from "react-redux";

const Home = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <main className="container py-4">
      <div
        className="rounded-4 p-4 p-md-5 mb-5 text-white d-flex flex-column align-items-center"
        style={{ backgroundColor: "#0c831f" }}
      >
        <h2 className="fw-bold mb-1">Stock up on daily essentials</h2>

        <p className="text-light mb-3" style={{ fontSize: "14px" }}>
          Get farm-fresh produce and daily groceries delivered in 10 minutes
        </p>

        <button
          className="btn btn-light fw-bold px-4"
          style={{ color: "#0c831f", borderRadius: "8px" }}
        >
          Shop Now
        </button>
      </div>

      <h4 className="fw-bold mb-4">Shop by Category</h4>
      
      <div className="row g-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default Home;
