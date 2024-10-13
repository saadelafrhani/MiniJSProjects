document.addEventListener("DOMContentLoaded", function () {
    var mainBlock = document.createElement('div');
    mainBlock.className = 'main-block';
    mainBlock.style.display = 'flex';
    mainBlock.style.justifyContent = 'center';
    mainBlock.style.alignItems = 'center';
    mainBlock.style.height = '80vh';
    mainBlock.style.padding = '25px';

    var form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center';
    form.style.justifyContent = 'center';
    form.style.background = 'rgba(0, 0, 0, 0.1)';
    form.style.border = '3px solid black';
    form.style.padding = '25px';

    var titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    var titleHeading = document.createElement('h2');
    titleHeading.textContent = 'Vous enregistrer au cours';
    titleDiv.appendChild(titleHeading);
    form.appendChild(titleDiv);

    var subtitleDiv = document.createElement('div');
    subtitleDiv.className = 'subtitle';
    var subtitleHeading = document.createElement('h3');
    subtitleHeading.textContent = 'Inscrivez-vous ici';
    subtitleDiv.appendChild(subtitleHeading);
    form.appendChild(subtitleDiv);

    var infoDiv = document.createElement('div');
    infoDiv.className = 'info';
    infoDiv.style.display = 'flex';
    infoDiv.style.flexDirection = 'column';
    infoDiv.style.alignItems = 'center';
    infoDiv.style.justifyContent = 'center';
    infoDiv.style.margin = '20px 0';

    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Nom complet');
    nameInput.style.padding = '5px';
    nameInput.style.marginBottom = '15px';
    nameInput.style.background = 'transparent';
    nameInput.style.border = 'none';
    nameInput.style.borderBottom = '1px solid black';

    var emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('name', 'mail');
    emailInput.setAttribute('placeholder', 'Email');
    emailInput.style.padding = '5px';
    emailInput.style.marginBottom = '15px';
    emailInput.style.background = 'transparent';
    emailInput.style.border = 'none';
    emailInput.style.borderBottom = '1px solid black';

    var telInput = document.createElement('input');
    telInput.setAttribute('type', 'text');
    telInput.setAttribute('name', 'tel');
    telInput.setAttribute('placeholder', 'Numéro de téléphone');
    telInput.style.padding = '5px';
    telInput.style.marginBottom = '15px';
    telInput.style.background = 'transparent';
    telInput.style.border = 'none';
    telInput.style.borderBottom = '1px solid black';

    infoDiv.appendChild(nameInput);
    infoDiv.appendChild(emailInput);
    infoDiv.appendChild(telInput);
    form.appendChild(infoDiv);

    var selectElement = document.createElement('select');
    selectElement.style.padding = '5px';
    selectElement.style.marginBottom = '15px';
    selectElement.style.background = 'transparent';
    selectElement.style.border = 'none';
    selectElement.style.borderBottom = '1px solid black';

    var option1 = document.createElement('option');
    option1.setAttribute('value', 'courses-types');
    option1.textContent = 'Type de cours';
    option1.setAttribute('selected', 'selected');

    var option2 = document.createElement('option');
    option2.setAttribute('value', 'short-courses');
    option2.textContent = 'Cours courts';

    var option3 = document.createElement('option');
    option3.setAttribute('value', 'featured-courses');
    option3.textContent = 'Cours facturé';

    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    selectElement.appendChild(option3);
    form.appendChild(selectElement);

    var submitButton = document.createElement('button');
    submitButton.textContent = 'Envoyer';
    submitButton.style.padding = '10px';
    submitButton.style.background = 'transparent';
    submitButton.style.border = '1px solid black';
    form.appendChild(submitButton);

    document.body.appendChild(mainBlock);
    mainBlock.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        if (validateForm() && verifTel()) {
            showBootstrapAlert('Formulaire soumis avec succès !');
        }
    });

    function validateForm() {
        let name = document.querySelector('input[name="name"]').value;
        let mail = document.querySelector('input[name="mail"]').value;
        let tel = document.querySelector('input[name="tel"]').value;

        if (!name || !mail || !tel) {
            alert("Veuillez remplir tous les champs.");
            return false;
        }
        return true;
    }

    function verifTel() {
        let tel = document.querySelector('input[name="tel"]').value;
        if (tel.length > 10) {
            alert("Numéro de téléphone non valide.");
            return false;
        }
        return true;
    }

    function showBootstrapAlert(message) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-dismissible fade show alert-position bg-success text-white ';
        alertDiv.setAttribute('role', 'alert');
        alertDiv.style.borderRadius = '10px'; 
    
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="close text-white" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        `;
    
        document.body.appendChild(alertDiv);
        
    }
});