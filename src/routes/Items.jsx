import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Items = () => {
  const items = useSelector((store) => store.items);

  const { pathname } = useLocation();

  const selectedCategory =
    pathname === "/cold-drinks" ? "cold-drink" : "grocery";

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <main className="container py-4">
      <div className="row g-4">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Items;
