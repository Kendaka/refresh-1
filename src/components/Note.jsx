    import React from 'react'

    const Note = (props) => {
        return(
            <div className='mx-auto my-8 max-w-md'> 
                <div className='border border-slate-300 rounded-lg p-8 bg-amber-50'>
                    <h1 className="text-lg font-bold text-slate-700">{props.title}</h1>
                    <p className="text-sm text-slate-500">{props.content}</p>
                </div>
            </div>
        )
    }

    export default Note