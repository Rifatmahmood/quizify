import { useEffect, useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import { categories } from "./store/data";


import 'antd/dist/reset.css';



function App() {
  const [view, setView] = useState("home");
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [answers, setAnswers] = useState(null); 
  useEffect(() => {
    if (!selectedQuestions) {
      setView('home');
      return;
    }

    setView('quiz');
  }, [selectedQuestions]);

  return (
    <>
      <div className=" container mx-auto">
        {view == 'home' && <Home categories={categories} setSelectedQuestions={setSelectedQuestions} />}
        {view == 'quiz' && selectedQuestions?.length &&
          <Quiz selectedQuestions={selectedQuestions} submitQuiz={(answers) => {
          setAnswers(answers); 
          setView('results'); 
          } } />}
        {view == 'results' && answers && <Results answers={answers} returnHome={() => {
          setAnswers(null); 
          setSelectedQuestions(null); 
          setView('home'); 
        }}/>}

      </div>



    </>
  )
}

export default App
