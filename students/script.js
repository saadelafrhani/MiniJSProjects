document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("myForm");
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const ageInput = document.getElementById("age");
    const addressInput = document.getElementById("address");
    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const ageError = document.getElementById("age-error");
    const addressError = document.getElementById("address-error");
    const tableBody = document.querySelector("#myTable tbody");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Reset errors
        fnameError.textContent = "";
        lnameError.textContent = "";
        ageError.textContent = "";
        addressError.textContent = "";

        // Validate form inputs
        let isValid = true;
        if (fnameInput.value.trim() === "") {
            fnameError.textContent = "First name is required.";
            isValid = false;
        }
        if (lnameInput.value.trim() === "") {
            lnameError.textContent = "Last name is required.";
            isValid = false;
        }
        if (ageInput.value.trim() === "") {
            ageError.textContent = "Age is required.";
            isValid = false;
        }
        
        if (isNaN(age) || age < 14 || age > 24) {
            ageError.textContent = "Age must be between 14 and 24.";
        } else {
            // Removed unnecessary condition
            this.submit();
        }
        
        if (addressInput.value.trim() === "") {
            addressError.textContent = "Address is required.";
            isValid = false;
        }

        // If form is valid, add data to table
        if (isValid) {
            const newRow = tableBody.insertRow();
            const fnameCell = newRow.insertCell();
            const lnameCell = newRow.insertCell();
            const ageCell = newRow.insertCell();
            const addressCell = newRow.insertCell();
            const editCell = newRow.insertCell();
            const deleteCell = newRow.insertCell();
            fnameCell.textContent = fnameInput.value;
            lnameCell.textContent = lnameInput.value;
            ageCell.textContent = ageInput.value;
            addressCell.textContent = addressInput.value;

            // Create Edit button
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-button");
            editButton.addEventListener("click", function() {
                // Fill form with row data
                fnameInput.value = fnameCell.textContent;
                lnameInput.value = lnameCell.textContent;
                ageInput.value = ageCell.textContent;
                addressInput.value = addressCell.textContent;
            });
            editCell.appendChild(editButton);

            // Create Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function() {
                // Delete row
                tableBody.removeChild(newRow);
            });
            deleteCell.appendChild(deleteButton);

            // Reset form inputs
            fnameInput.value = "";
            lnameInput.value = "";
            ageInput.value = "";
            addressInput.value = "";
        }
    });
});
