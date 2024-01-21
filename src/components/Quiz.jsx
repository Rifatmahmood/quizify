import { Card, Button } from 'antd';

export default function Quiz({ selectedQuestions }) {
  console.log(selectedQuestions)
  return (
    <div>
    {selectedQuestions.map((s, idx) => (
      <Card
        title={s.question}
        bordered={false}
        key={idx}
      >
        {s.options.map((opt, optIdx) => (
          <p key={optIdx}> {opt.answer} </p>
        ))}

      </Card>
    ))}
      
      <Button>Submit</Button>
    </div>

  )
}
