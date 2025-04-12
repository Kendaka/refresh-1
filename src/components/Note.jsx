import React from 'react'

const Note = (props) => {
  return (
    <div className='h-full p-2'> 
      <div className='border border-slate-300 rounded-lg p-4 bg-amber-50 h-full flex flex-col max-h-60 overflow-y-auto'>
        <h1 className="text-2xl font-bold text-slate-700 mb-2"> {props.title}</h1>
        <p className="text-lg text-slate-500">{props.content}</p>
      </div>
    </div>
  )
}

export default Note