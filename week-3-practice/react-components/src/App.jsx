import Card from './components/Card.jsx'
import './App.css'
import xian from './assets/xian.jpg';
import shenzhen from './assets/shenzhen1.jpg';
import calgary from './assets/calgary.jpg';

function App() {

  const cardsData = [
    { title:'My HomeTown',
    image: xian,
    description: "Xi'an is a historic city in China, famous for the Terracotta Warriors and its ancient city wall."},

    {title:'My workPlace',
    image: shenzhen,
    description: "Shenzhen, a vibrant metropolis in China, is known as a hub for technology and innovation."},

    {title:'My studyPlace',
    image: calgary,
    description: "Calgary, a beautiful Canadian city, is renowned for its stunning natural surroundings and the Calgary Stampede."},]
   
  return (
    <>
      <h1>Welcome to my City</h1>
      <div>
          {/* < Card title = {cardsData[0].title} description={cardsData[0].description}/> */}
          {cardsData.map((card, index) =>(
          <Card
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}/>
      ))}
      </div>
    </>
  )
}

export default App
