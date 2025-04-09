import React from 'react'

function App() {

  const name = "Kendrick"
  const luckyNumber = Math.floor(Math.random() * 10) + 1
  const isLuckyNumber = luckyNumber >= 6 ? "Greater than" : "Less than"

  return (
    <div>
      <h1>{name}</h1>
      <p>Your lucky number is {isLuckyNumber}.</p>
    </div>
  )
}

export default App
