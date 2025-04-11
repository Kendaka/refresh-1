import React from 'react'

const Note = (props) => {
    return(
        <div className='w-64'> 
            <div className='border border-slate-300 rounded-lg p-4 bg-amber-50 h-64 flex flex-col'>
                <h1 className="text-lg font-bold text-slate-700 mb-2 line-clamp-1">{props.title}</h1>
                <p className="text-sm text-slate-500 line-clamp-4 flex-grow">{props.content}</p>
            </div>
        </div>
    )
}

export default Note