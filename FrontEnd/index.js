document.addEventListener("DOMContentLoaded", ()=>{
  const noteTitleDiv = document.querySelector(".note-title")
  const noteBodyDiv = document.querySelector(".note-body")
  fetch("http://localhost:3000/api/v1/notes")
  .then(response => response.json())
  .then(data =>
    noteTitleDiv.innerHTML = data.map((noteObj) => {
    let newNote = new Note(noteObj)
    return newNote.renderTitle();
  }).join(""))

  document.addEventListener("click", (event) => {
    if (event.target.className === "title"){
      //debugger
      let noteId = parseInt(event.target.id);
      let note = allNotes.find((note) => note.id === noteId);
      console.log(note);
      noteBodyDiv.innerHTML = note.renderBody();
    }
  })

})
