import React from 'react'

function App() {

  const name = "Kendrick"
  const luckyNumber = Math.floor(Math.random() * 10) + 1

  return (
    <div>
      <h1>{name}</h1>
      <p>Your lucky number is {luckyNumber}.</p>
    </div>
  )
}

export default App
