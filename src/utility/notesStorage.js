
// add note to local storage
export const addNoteToLocalStorage = (newNote) => {
    const notes = getAllNotes()
    const updatedNotes = [...notes, newNote]
    localStorage.setItem('notes', JSON.stringify(updatedNotes))

}

// return all notes from localstorage
export const getAllNotes = () => {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

// delete note from local storgae
export const deleteNoteFromLocalStorage = (id) => {
    const notes = getAllNotes()
    const updatedNotes = notes.filter(item => item.id !== id)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
}