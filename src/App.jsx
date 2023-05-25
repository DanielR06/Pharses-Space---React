import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'
import phrases from './assets/data.json'
import Footer from './components/Footer/Footer'
import backgrounds from './assets/backgrounds.json'
import { getRandomNumber } from './Utils/getRandomNumber'

function App() {
  const [indexPhrases, setIndexPharse] = useState(getRandomNumber(0, phrases.length - 1));
  let styles =[]
  const [indexBackground, setIndexBackground] = useState(getRandomNumber(0, backgrounds.length - 1));
  const changeAll = () => {
    const newIndex = getRandomNumber(0, phrases.length - 1);
    setIndexPharse(newIndex);
  };

  return (
      <div className="App" style={{}}>
        <h1>INFOGALAX</h1>
        <Card phrase={phrases[indexPhrases]} />
        <Button changeAll={changeAll} />
        <Footer phrase={phrases[indexPhrases]}/>
      </div>
  )
}

export default App
