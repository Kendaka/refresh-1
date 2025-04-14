import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setNote((prevNote) => {
            return{
                ...prevNote,
                [name] : value
            }
        })
    }

    const submitNote = (event) => { 
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
  return (
    <div className="bg-slate-100 p-8 flex justify-center">
      <form className="bg-amber-50 w-full max-w-md p-4 rounded-lg shadow-md relative">
        <input
          name="title"
          placeholder="Title"
          className="w-full p-2 mb-4 text-lg font-medium text-slate-700 bg-transparent border-b border-slate-300 focus:outline-none focus:border-amber-400"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          className="w-full p-2 text-slate-600 bg-transparent focus:outline-none resize-none"
          value={note.content}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute -bottom-3 -right-3 bg-slate-600 hover:bg-slate-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-colors duration-200"
          onClick={submitNote}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;