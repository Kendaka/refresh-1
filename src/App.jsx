import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  const luckyNumber = Math.floor(Math.random() * 10) + 1
  const isLuckyNumber = luckyNumber >= 6 ? "Greater than" : "Less than"

  return (
    <div>
      <Header />
      <p className='text-9xl'>Your lucky number is {isLuckyNumber}.</p>
    </div>
  )
}

export default App
