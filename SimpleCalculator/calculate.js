function calculate() {
    var num1 = parseFloat(document.getElementById('nbr1').value);
    var num2 = parseFloat(document.getElementById('nbr2').value);
    var operator = document.getElementById('calcule').value;
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please input numbers";
    } else {
    
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Invalid operation";
        }
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}
