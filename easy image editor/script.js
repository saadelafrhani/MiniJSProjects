let currentFilter = 'brightness';
let rotationDegree = 0;

function changeFilter(filterType) {
    currentFilter = filterType;
    document.querySelector(".operation").textContent = filterType.charAt(0).toUpperCase() + filterType.slice(1);
    applyFilter();
}

function applyFilter() {
    const image = document.getElementById('image');
    const rangeValue = document.getElementById('rangeInput').value;
    image.style.filter = `${currentFilter}(${rangeValue}%)`;
}

function rotateImage(degree) {
    rotationDegree += degree;
    const image = document.getElementById('image');
    image.style.transform = `rotate(${rotationDegree}deg)`;
}

function flipImage(direction) {
    const image = document.getElementById('image');
    if (direction === 'horizontal') {
        image.style.transform += ' scaleX(-1)';
    } else if (direction === 'vertical') {
        image.style.transform += ' scaleY(-1)';
    }
}

function resetFilters() {
    const image = document.getElementById('image');
    image.style.filter = 'none';
    image.style.transform = 'none';
    document.getElementById('rangeInput').value = 50;
    currentFilter = 'brightness';
    document.querySelector(".operation").textContent = "Select an option";
}

function chooseImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            document.getElementById('image').src = event.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function saveImage() {
    const image = document.getElementById('image');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.filter = image.style.filter;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotationDegree * Math.PI / 180);
    ctx.scale(image.style.transform.includes('scaleX(-1)') ? -1 : 1, image.style.transform.includes('scaleY(-1)') ? -1 : 1);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);

    canvas.toBlob(function(blob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'edited-image.png';
        link.click();
    });
}
