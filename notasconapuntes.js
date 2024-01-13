//1.Primero se crea un arreglo
const notes = [
    {content: "This is my first note."},
    {content: "This is a bigger note with multiple lines."},
    {content: "This is another note."},
    {content: "One more note."},
];

//2.Declaracion de una funcion:
function createNote(event) {
    //5.Es decirle a la maquina que deje dde hacer lo que hace por default:
    event.preventDefault();
    //console.dir(event);
    
    //6.dentro de la propiedad target esta el event
    //const form= event.target;
    //7.esto es para que se almacene en la variable newContent, lo que sea que escriba el operador en el input
    //const newContent = form.elements["new-note"].value;
    //8. aqui las dos lineas de codigo anteriores se juntan en una y asi accedo a lo que el usuario ha escrito en el input
    const form = event.target;
    const newContent = form.elements["new-note"].value;

    //26. newContent ""
    if (newContent !== "") {
        const newNote = {content: newContent, completed: false};
        notes.push(newNote);  
    } else {
        alert("No se puede crear una tarea vacia!")
    }

    //9.Se le da un reset para resetar despues de apretar el button
    form.reset();
    //24. Luego se vuelve a ejecutar el renderNotes:
    renderNotes();
}
//Aqui recien se esta ejecutando la funcion createNote:
//createNote();

//14. Vamos a crear una funcion que reciba la tarea como parametro para poder guardar el argumento:
//24.Vamos a crear una función que reciba la tarea como parámetro para poder guardar el argumento:
function createNoteItem(note, index) {
    const li = document.createElement("li");//15. se esta creando un objeto li en javascript y cuando se inserte en el html, se estaria creando un elemento que tiene esta estructura.
    //18. Se esta creando los elementos vacios
    const button = document.createElement("button");
    const span = document.createElement("span");

    // 19.Se esta configurando cada elemento con un string:
    button.textContent = "Delete"
    span.textContent = note.content;//16. al span vacio se le esta agregando el string que trae el parametro.
    //20. Se le esta agregando una clase al button para poder modificarlo con css:
    button.classList.add("button-delete");
    //25.Se agrega un manejador de evento al boton:
    button.addEventListener("click", function() {
        //Se esta llamando a la funcion para eliminar la tarea y se esta creando una nueva funcion para eliminar la tarea del arreglo y se vuelve a renderizar las notas actualizadas:
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        renderNotes();

    });
    //21. se esta creando la estructura en html: 
    li.append(button, span);

    return li;
}


//22.Se crea una function que va a encerrar desde el paso 10. al 13. para que se ejecute el for cada vez que se crea una nueva tarea:
function renderNotes() {
    //10. A nivel de javascript creamos una variable que capture el elemento ul:
    const ulElement = document.querySelector("#container-note");
    //25. Se debe hacer el clear aqui porque se tiene que limpiar todo el contenido del ul y luego se imprima la nueva nota:
    ulElement.innerHTML = "";//esta linea de codigo funciona como un clear para el elemento ul
    
    //11.Vamos a coger cada objeto del arreglo, y se tiene que transformar en un elemento con etiqueta li, y luego el li se va a insertar en el ul y se implementa a travez de un loop:
    for (let i=0; i < notes.length; i++) {
        const note = notes[i];
        //12. crear un elemento p en base al objeto note:
        const liElement = createNoteItem(note);
        //13. dicho elemento p lo insertamos dentro del ul:
        ulElement.append(liElement);
    }
    
}

//3.dentro de la variable formElement ya se tiene todo el formulario y todos sus children y esta variable es de tipo object. Al document se le puede agregar el querySelector para elegir un elemento expecifico
const formElement = document.querySelector("#new-note-form");

//4.ahora formElement se le va anadir eventListener y va a estar siempre atento a cuando sucede el evento submit(presionar boton) y va a ejecutar la funcion createNote
formElement.addEventListener("submit", createNote);

//23. Se ejecuta la funcion del paso 22.
renderNotes();

