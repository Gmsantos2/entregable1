import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import data from './db/data.json'
import { getRandomElement } from './utils/random'

const bgs = ["bg1","bg2","bg3","bg4" ];

function App() {
  const [quote, setQuote] = useState(getRandomElement(data))
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs))

  const handleChangequote = ()  => {
    setQuote(getRandomElement(data))
    setCurrentBg(getRandomElement(bgs))
  }
  console.log(getRandomElement(data))



  return (
    <main className={`App ${currentBg}`}>
     <QuoteBox  quote={quote} handleChangequote={handleChangequote}/>
    </main>
  )
}

export default App
