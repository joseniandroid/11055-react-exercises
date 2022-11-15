import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;