import { useEffect, useState } from "react";
import Home from "./components/Home";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import { categories } from "./store/data";


import 'antd/dist/reset.css';



function App() {
  const [view, setView] = useState("home");
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  useEffect(() => {
    if (!selectedQuestions) {
      setView('home');
      return;
    }

    setView('quiz');
  }, [selectedQuestions]);

  return (
    <>
      {view == 'home' && <Home categories={categories} setSelectedQuestions={setSelectedQuestions} />}
      {view == 'quiz' && selectedQuestions?.length && <Quiz selectedQuestions={selectedQuestions} />}
      {view == 'results' && <Results />}



    </>
  )
}

export default App
