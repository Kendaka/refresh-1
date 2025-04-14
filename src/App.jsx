import React, { useState } from 'react'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import CreateArea from './components/CreateArea'
import './App.css'

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    }
    )
  }

  return ( 
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      <div className='flex-grow p-8 grid grid-cols-4 gap-4'>
        {notes.map((noteItem, index) => {
          return <Note
          key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}  
            onDelete={deleteNote}
          />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App