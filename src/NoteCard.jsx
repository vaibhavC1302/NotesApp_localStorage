import React from 'react'
import { deleteNoteFromLocalStorage } from './utility/notesStorage'
const NoteCard = ({ note, setNotesData }) => {


    const handleDelete = () => {
        // delete note from local storage
        deleteNoteFromLocalStorage(note.id)

        // change data state to rerender
        setNotesData(prev => {
            return prev.filter(item => item.id !== note.id)
        })
    }

    return (
        <div className='noteCardContainer'>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NoteCard