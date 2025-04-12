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
      <div className='flex-grow p-8 grid grid-cols-4 gap-4'>
        {notes.map((noteItem) => {
          return (
            <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App