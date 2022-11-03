import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
