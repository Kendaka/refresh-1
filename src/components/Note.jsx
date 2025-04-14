import React from 'react'

const Note = (props) => {
  return (
    <div className='h-full p-2 relative'> 
      <div className='border border-slate-300 rounded-lg p-4 bg-amber-50 h-full flex flex-col max-h-80 overflow-y-auto'>
        <button 
          className="absolute top-0 left-0 -translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
          onClick={props.onDelete}  
        >
          ×
        </button>
        
        <h1 className="text-2xl font-bold text-slate-700 mb-2">{props.title}</h1>
        <p className="text-lg text-slate-500">{props.content}</p>
      </div>
    </div>
  )
}

export default Note