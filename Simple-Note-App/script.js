let selectedColor = "grey";
function getColor(color) {
  selectedColor = color;
}
function addTask() {
    const inputText = document.getElementById("input");
    if (inputText.value == "") {
        input.placeholder = "Ajouter une note !!!!";
    } else {
        const note = document.createElement("div");
        const buttons = document.createElement("div");
        const check = document.createElement("i");
        const trash = document.createElement("i");

        note.classList.add("note");
        note.style.backgroundColor = selectedColor;
        note.innerHTML = inputText.value;

        // Add icons to the buttons container
        check.classList.add("bi", "bi-check-all");
        check.style.color = "black";
        check.addEventListener("click", function () {
            check.style.color = "green";
        });
        buttons.appendChild(check);

        trash.classList.add("bi", "bi-trash");
        trash.style.color = "black";
        trash.addEventListener("click", function () {
            note.remove();
        });
        buttons.appendChild(trash);

        // Append the buttons container to the note
        note.appendChild(buttons);

        // Append the note to the notes container
        document.querySelector(".notes").appendChild(note);
    }

    inputText.value = "";
}



function removeTasks() {
  document.querySelector(".notes").innerHTML = "";
}
