import React from 'react'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import notes from './notes'
import './App.css'

function App() {
  return ( 
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <Note
          key={notes.map(note => note.key)}
          title={notes.map(note => note.title)}
          content={notes.map(note => note.content)}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App