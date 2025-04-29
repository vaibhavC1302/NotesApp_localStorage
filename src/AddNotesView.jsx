import React from 'react'
import { addNoteToLocalStorage } from './utility/notesStorage'

const AddNotesView = ({ setNotesData, setActiveTab }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        // handling form data
        console.log("handling form submission")
        const formData = new FormData(e.target);
        const { title, content } = Object.fromEntries(formData.entries())
        const newNote = {
            id: Date.now(),
            title,
            content
        }
        // add note to local storage
        addNoteToLocalStorage(newNote)

        // change notesData state to that causes rerender 
        setNotesData(prev => [...prev, newNote])

        // move from addnote view to all note view
        setActiveTab('view')

    }

    return (
        // form 
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="title">
                title
            </label>
            <input required type="text" name='title' id='title' />
            <label htmlFor="content">
                content
            </label>
            <input required type="text" name='content' id='content' />
            <button >add note</button>

        </form>
    )
}

export default AddNotesView