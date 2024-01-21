import { Card } from 'antd';



export default function Home({ categories, setSelectedQuestions }) {

  return (
    <>

      {categories.map((cat, idx) => (

        <Card key={idx} onClick={() => setSelectedQuestions(cat.questions)}>
          {cat.category}
        </Card>
      ))}


    </>
  )
}
