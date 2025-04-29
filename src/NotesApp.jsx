import React, { useEffect, useState } from 'react'
import NotesView from './NotesView'
import AddNotesView from './AddNotesView'
import { getAllNotes } from './utility/notesStorage'

const NotesApp = () => {

    // to make tabs for adding a new note and viewing all notes
    const [activeTab, setActiveTab] = useState('view')
    // contains state for notes data
    const [notesData, setNotesData] = useState([])


    // getting all notes from local storage after render ṭree is made
    useEffect(() => {
        const notes = getAllNotes()
        setNotesData(notes)
    }, [])

    return (
        <div>
            {/* nav containing tab buttons that changes active tab state and changes view */}
            <div className="nav">
                <button onClick={() => setActiveTab('view')}>All Notes</button>
                <button onClick={() => setActiveTab('add')}>Add notes</button>
            </div>
            <div >
                {activeTab === 'view'
                    ? <NotesView notesData={notesData} setNotesData={setNotesData} />
                    : <AddNotesView setNotesData={setNotesData} setActiveTab={setActiveTab} />}
            </div>
        </div>


    )
}

export default NotesApp