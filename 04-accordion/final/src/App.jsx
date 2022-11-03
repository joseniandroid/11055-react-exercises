import { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((q) => {
            return <Question key={q.id} title={q.title} info={q.info} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
