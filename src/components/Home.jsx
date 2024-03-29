import { Card } from 'antd';



export default function Home({ categories, setSelectedQuestions }) {

  return (
    <>
      <div className="flex flex-col  items-center pt-40">
        {categories.map((cat, idx) => (

          <Card
            className='text-center mb-7'
            key={idx}
            onClick={() => setSelectedQuestions(cat.questions)}
            style={{
              width: 600,
            }}
          >
            {cat.category}

          </Card>
        ))}
      </div>



    </>
  )
}
