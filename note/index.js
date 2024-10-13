

const container = document.createElement("div");
container.style.border = "1px solid orange";
container.style.backgroundColor = "yellow";
container.style.padding = "20px";
container.style.width= "1000px";
container.style.margin="400px";


// Input for adding a city
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Ajouter une ville");

// Radio button for adding at the beginning
const addLocationRadio = document.createElement("input");
addLocationRadio.setAttribute("type", "radio");
addLocationRadio.setAttribute("name", "addLocation");
addLocationRadio.setAttribute("value", "beginning");
addLocationRadio.setAttribute("checked", "checked");

// Radio button for adding at the end
const addLocationRadioEnd = document.createElement("input");
addLocationRadioEnd.setAttribute("type", "radio");
addLocationRadioEnd.setAttribute("name", "addLocation");
addLocationRadioEnd.setAttribute("value", "end");

// Labels for the radio buttons
const addLocationLabelBeginning = document.createElement("label");
addLocationLabelBeginning.innerText = "first ";
addLocationLabelBeginning.appendChild(addLocationRadio);

const addLocationLabelEnd = document.createElement("label");
addLocationLabelEnd.innerText = "last ";
addLocationLabelEnd.appendChild(addLocationRadioEnd);

// Append input, radio buttons, and labels
container.appendChild(input);
container.appendChild(addLocationLabelBeginning);
container.appendChild(addLocationLabelEnd);

const cityList = document.createElement("ul");
cityList.style.border = "1px solid black";
cityList.style.padding = "2px";

// Button for adding a city
const addBtn = document.createElement("button");
addBtn.innerText = "Ajouter";

// Function to add a new city
addBtn.onclick = function () {
    if (input.value == '') {
        // Highlight the input field if empty
        input.style.borderColor = 'red';
        input.style.borderWidth = '3px';
        input.style.padding = '5px';
        input.style.margin = '3px';
        input.placeholder = "Enter something first";
        return;
    } else {
        input.style.borderColor = '';
    }

    const item = document.createElement("li");
    item.style.background = "green";
    item.style.color = "white";
    item.style.marginBottom = "2px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "space-between";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    item.innerText = input.value;
    item.appendChild(checkbox); // Add checkbox to the city item

    // Get the selected location (beginning or end)
    const addLocation = document.querySelector('input[name="addLocation"]:checked').value;

    if (addLocation === 'beginning') {
        cityList.insertBefore(item, cityList.firstChild); // Add at the beginning
    } else {
        cityList.appendChild(item); // Add at the end
    }

    input.value = ''; // Clear input after adding
};

// Button for deleting selected cities
const deleBtn = document.createElement("button");
deleBtn.innerText = "Supprimer";

deleBtn.onclick = function () {
    const cityItems = cityList.querySelectorAll("li");

    cityItems.forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            cityList.removeChild(item); // Remove item if checkbox is checked
        }
    });
};

// Append buttons and list to the container
container.appendChild(addBtn);
container.appendChild(deleBtn);
container.appendChild(cityList);
document.body.appendChild(container);
