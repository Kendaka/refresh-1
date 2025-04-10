import React from 'react'

const Header = () => {
    const name = "Kendrick"

    return(
        <div className='bg-slate-700 flex items-start justify-start py-8 px-14'>
            <h1 className='font-serif text-5xl text-amber-200'>{name}</h1>
        </div>
    )
}

export default Header