import React from 'react'
import NoteCard from './NoteCard'

const NotesView = ({ notesData, setNotesData }) => {
    return (
        <div className='notesContainer'>
            {notesData.map(note => {
                return <NoteCard note={note} key={note.id} setNotesData={setNotesData} />
            })}
        </div>
    )
}

export default NotesView