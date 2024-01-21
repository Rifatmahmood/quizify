import { Button, Card } from 'antd';
import { useState } from 'react';

export default function Quiz({ selectedQuestions, submitQuiz }) {
  const [answers, setAnswers] = useState(["", "", "", "", ""])
  const notAllAnswerd = answers.some(ans => ans === ""); 

  return (
    <div >
      {selectedQuestions.map((s, idx) => (
        <Card

          title={`${idx + 1}. ` + s.question}
          bordered={false}
          key={idx}

        >

          {s.options.map((opt, optIdx) => (
            <div
              className={`cursor-pointer ${answers[idx] === opt? 'bg-sky-200' : 'bg-transparent'}`} 
              
              onClick={() => {
                const updatedAnswers = [...answers];
                updatedAnswers[idx] = opt;
                setAnswers(updatedAnswers);
              
              }}
              key={optIdx}>
              {opt.answer}
            </div>
          ))}

        </Card>
      ))}

      <Button
        onClick={() => {
          if (!notAllAnswerd) {
            submitQuiz(answers); 
          }
        }}
        disabled={notAllAnswerd} block
        
      >Submit</Button>
    </div>

  )
}
