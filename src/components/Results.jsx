import { Button, Progress, Space, Typography } from 'antd';

const { Title } = Typography; 
function calculateResults(userAnswers) {
  let correctAnswers = 0;
  const totalAns = userAnswers.length;

  userAnswers.forEach(answer => {
    if (answer.isCorrect) {
      correctAnswers++;
    }
  });
  const percentage = ((correctAnswers / totalAns) * 100).toFixed(0);
  return percentage;
}





export default function Results({ answers, returnHome }) {

  const percent = calculateResults(answers)
  console.log(percent)

  return (
    <Space wrap className='flex flex-col justify-center items-center pt-40'>
      <div>
      {percent === 100 ? <Progress type="circle" percent={100} format={() => 'Done'} /> : <Progress type="circle" percent={percent} format={(percent) => `${percent}%`} />}
      </div>
        <Title className='pt-10' level={1}> You Got {percent}% correct!</Title>  
        <Button onClick={returnHome }block>Return Home</Button>
      


    </Space>
  )
}
