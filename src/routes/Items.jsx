import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";

const Items = () => {
  const items = useSelector((store) => store.items);

  return (
    <main className="container py-4">
      <div className="row g-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Items;