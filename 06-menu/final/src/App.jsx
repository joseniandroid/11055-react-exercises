import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

function App() {
  const allCategories = [
    "all",
    ...new Set(items.map((item) => item.category))
  ];

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} />
        <Menu />
      </section>
    </main>
  );
}

export default App;
