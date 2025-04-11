import React from 'react'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import notes from './notes'
import './App.css'

const createNotes = (note) => {
  return (
    <Note
      key={note.key}
      title={note.title}
      content={note.content}
    />
  )
}

function App() {
  return ( 
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow p-4 flex flex-wrap justify-center gap-4'>
        {notes.map(createNotes)}
      </div>
      <Footer />
    </div>
  )
}

export default App