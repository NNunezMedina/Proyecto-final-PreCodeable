const notes = [
    {content: "This is my first note."},
    {content: "This is a bigger note with multiple lines."},
    {content: "This is another note."},
    {content: "One more note."},
];

function createNote(event) {
    event.preventDefault();

    const form = event.target;
    const newContent = form.elements["new-note"].value;

    if (newContent !== "") {
        const newNote = {content: newContent, completed: false};
        notes.push(newNote);  
    } else {
        alert("No se puede crear una tarea vacia!")
    }

    form.reset();
    renderNotes();
}

function createNoteItem(note, index) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    span.textContent = note.content;
    button.textContent = "Delete"
    button.classList.add("button-delete");
    button.addEventListener("click", function() {
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        renderNotes();

    });
    li.append(button, span);
    return li;
}

function renderNotes() {
    const ulElement = document.querySelector("#container-note");
    ulElement.innerHTML = "";
    for (let i=0; i < notes.length; i++) {
        const note = notes[i];
        const liElement = createNoteItem(note);
        ulElement.append(liElement);
    }
    
}

const formElement = document.querySelector("#new-note-form");
formElement.addEventListener("submit", createNote);

renderNotes();



