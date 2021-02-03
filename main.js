//Arithmetic Functionality
var operationDisplay = document.querySelector(".first-operation");
var operationDisplay3 = document.querySelector(".second-operation");
var operationDisplay2 = document.querySelector(".math-operation");
var functionOperation = document.querySelectorAll(".functions");
var $result = document.querySelector(".result");
var $numbers = document.querySelectorAll(".numbers");
var equal = document.querySelector(".numbers-equal");
equal.addEventListener("click", resultOutput);
var clear = document.querySelector(".clear");
clear.addEventListener("click", clearAll);
var backspace = document.querySelector(".functions-delete")
backspace.addEventListener("click", backSpace)

//first display operation
for (number of $numbers) {
    number.addEventListener("click", numberFunction);
}
function numberFunction(e) {

    if (operationDisplay.innerText == "" && e.target.innerText == ".") {
        return;
    } else if (operationDisplay.innerText.includes(".") && e.target.innerText == ".") {
        return;
    } else if (operationDisplay2.innerText != "+" && operationDisplay2.innerText != "x" && operationDisplay2.innerText != "-" && operationDisplay2.innerText != "/" && operationDisplay.innerText != "sin" && operationDisplay.innerText != "cos" && operationDisplay.innerText != "tan" && operationDisplay.innerText != "arcsin" && operationDisplay.innerText != "arccos" && operationDisplay.innerText != "arctan" && operationDisplay.innerText != "log" && operationDisplay.innerText != "e" && operationDisplay.innerText != "In" && operationDisplay.innerText != "√" && operationDisplay.innerText != "∛" && operationDisplay.innerText != "e" && operationDisplay.innerText != "π") {
        operationDisplay.innerText += e.target.innerText
        if ((operationDisplay.innerText.length == 16)) {
            operationDisplay.innerText = "";
        }
    }
}

for (number of $numbers) {
    number.addEventListener("click", mathFunction);
}
function mathFunction(e) {
    if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
        return;
    } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
        return;
    }
    else if (operationDisplay2.innerText && $result.innerText == "") {
        operationDisplay3.innerText += e.target.innerText;
        if (operationDisplay3.innerText.length == 16) {
            operationDisplay3.innerText = "";
        }

    }
}

for (number of $numbers) {
    number.addEventListener("click", trigFunction);
}
function trigFunction(e) {
    if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
        return;
    } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
        return;
    }
    else if (operationDisplay.innerText == "sin" || operationDisplay.innerText == "cos" || operationDisplay.innerText == "tan" || operationDisplay.innerText == "arcsin" || operationDisplay.innerText == "arccos" || operationDisplay.innerText == "arctan" || operationDisplay.innerText == "log" || operationDisplay.innerText == "In" || operationDisplay.innerText == "√" || operationDisplay.innerText == "∛" && $result.innerText == "") {
        operationDisplay3.innerText += e.target.innerText;
        if (operationDisplay3.innerText.length == 16) {
            operationDisplay3.innerText = "";
        }

    }
}
//Arithmetic Operations
for (operation of functionOperation) {
    operation.addEventListener("click", mathOperation)
}

function mathOperation(x) {
    if (x.target.innerText == "+" && $result.innerText == "" && operationDisplay.innerText) {
        operationDisplay2.innerText = "+";
    }
    else if (x.target.innerText == "x" && $result.innerText == "" && operationDisplay.innerText) {

        operationDisplay2.innerText = "x";
    }
    else if (x.target.innerText == "-" && $result.innerText == "" && operationDisplay.innerText) {

        operationDisplay2.innerText = "-";
    }
    else if (x.target.innerText == "/" && $result.innerText == "" && operationDisplay.innerText) {

        operationDisplay2.innerText = "/";
    }
    else if (x.target.innerText == "sin" && $result.innerText == "") {


        operationDisplay.innerText = "sin";
    }
    else if (x.target.innerText == "cos" && $result.innerText == "") {

        operationDisplay.innerText = "cos";
    }
    else if (x.target.innerText == "tan" && $result.innerText == "") {

        operationDisplay.innerText = "tan";
    }
    else if (x.target.innerText == "asin" && $result.innerText == "") {

        operationDisplay.innerText = "arcsin";
    }
    else if (x.target.innerText == "acos" && $result.innerText == "") {

        operationDisplay.innerText = "arccos";
    }
    else if (x.target.innerText == "atan" && $result.innerText == "") {

        operationDisplay.innerHTML = "arctan";
    }
    else if (x.target.innerText == "log" && $result.innerText == "") {

        operationDisplay.innerHTML = "log";
    }
    else if (x.target.innerText == "In" && $result.innerText == "") {

        operationDisplay.innerText = "In";
    }
    else if (x.target.innerText == "√" && $result.innerText == "") {

        operationDisplay.innerText = "√";
    }
    else if (x.target.innerText == "∛" && $result.innerText == "") {

        operationDisplay.innerText = "∛";
    }
    else if (x.target.innerText == "x²" && operationDisplay.innerText && $result.innerText == "") {


        $result.innerText = parseFloat(operationDisplay.innerText) * parseFloat(operationDisplay.innerText)
    }
    else if (x.target.innerText == "x²" && $result.innerText && operationDisplay.innerText) {
        $result.innerText = parseFloat($result.innerText) * parseFloat($result.innerText)
    }
    else if (x.target.innerText == "x³" && operationDisplay.innerText && $result.innerText == "") {

        $result.innerText = parseFloat(operationDisplay.innerText) * parseFloat(operationDisplay.innerText) * parseFloat(operationDisplay.innerText)
    }
    else if (x.target.innerText == "x³" && $result.innerText && operationDisplay.innerText) {


        $result.innerText = parseFloat($result.innerText) * parseFloat($result.innerText) * parseFloat($result.innerText)
    }
    else if (x.target.innerText == "%" && operationDisplay.innerText && $result.innerText == "") {

        $result.innerText = parseFloat(operationDisplay.innerText) * 0.01
    }
    else if (x.target.innerText == "%" && $result.innerText && operationDisplay.innerText != "") {
        $result.innerText = parseFloat($result.innerText) * 0.01
    }
    else if (x.target.innerText == "n!" && operationDisplay.innerText && $result.innerText == "") {
        const factorial = parseFloat(operationDisplay.innerText);
        let fact = 1;
        for (i = 1; i <= factorial; i++) {
            fact *= i;
        }
        $result.innerText = fact;
    }
    else if (x.target.innerText == "+/-") {
        if (operationDisplay.innerText == "") {
            operationDisplay.innerText = "-";
        }
        else if (operationDisplay3.innerText == "" && operationDisplay.innerText) {
            operationDisplay3.innerText = "-";
        }

    }

    else if (x.target.innerText == "e" && $result.innerText == "" && operationDisplay.innerText && operationDisplay2.innerText) {
        operationDisplay3.innerText = "e"
    }
    else if (x.target.innerText == "e" && $result.innerText == "") {
        operationDisplay.innerText = "e";
    }
    else if (x.target.innerText == "π" && $result.innerText == "" && operationDisplay.innerText && operationDisplay2.innerText) {
        operationDisplay3.innerText = "π"
    }
    else if (x.target.innerText == "π" && $result.innerText == "") {
        operationDisplay.innerText = "π";
    }

}

// result

function resultOutput() {

    if (operationDisplay2.innerText === "+" && operationDisplay3.innerText && operationDisplay.innerText != "e" && operationDisplay3.innerText != "e" && operationDisplay.innerText != "π" && operationDisplay3.innerText != "π") {
        $result.innerText = parseFloat(operationDisplay.innerText) + parseFloat(operationDisplay3.innerText);
    }
    else if (operationDisplay2.innerText === "x" && operationDisplay3.innerText && operationDisplay.innerText != "e" && operationDisplay3.innerText != "e" && operationDisplay.innerText != "π" && operationDisplay3.innerText != "π") {
        $result.innerText = parseFloat(operationDisplay.innerText) * parseFloat(operationDisplay3.innerText)
    }
    else if (operationDisplay2.innerText === "-" && operationDisplay3.innerText && operationDisplay.innerText != "e" && operationDisplay3.innerText != "e" && operationDisplay.innerText != "π" && operationDisplay3.innerText != "π") {
        $result.innerText = parseFloat(operationDisplay.innerText) - parseFloat(operationDisplay3.innerText)
    }
    else if (operationDisplay2.innerText === "/" && operationDisplay3.innerText && operationDisplay.innerText != "e" && operationDisplay3.innerText != "e" && operationDisplay.innerText != "π" && operationDisplay3.innerText != "π") {
        $result.innerText = parseFloat(operationDisplay.innerText) / parseFloat(operationDisplay3.innerText)
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (parseFloat(operationDisplay.innerText) / parseFloat(operationDisplay3.innerText)).toFixed(11);

        }
    }
    else if (operationDisplay.innerText === "sin" && operationDisplay3.innerText) {
        $result.innerText = Math.sin(parseFloat(operationDisplay3.innerText) * Math.PI / 180)
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = Math.sin(parseFloat(operationDisplay3.innerText) * Math.PI / 180).toFixed(11);
        }
    }
    else if (operationDisplay.innerText === "cos" && operationDisplay3.innerText) {
        $result.innerText = Math.cos(parseFloat(operationDisplay3.innerText) * Math.PI / 180)
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = Math.cos(parseFloat(operationDisplay3.innerText) * Math.PI / 180).toFixed(11);
        }
    }
    else if (operationDisplay.innerText === "tan" && operationDisplay3.innerText) {
        $result.innerText = Math.tan(parseFloat(operationDisplay3.innerText) * Math.PI / 180)
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = Math.tan(parseFloat(operationDisplay3.innerText) * Math.PI / 180).toFixed(11);
        }
    }

    else if (operationDisplay.innerText === "arcsin" && operationDisplay3.innerText) {
        $result.innerText = Math.asin(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.asin(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI).toFixed(11);
        }
    }
    else if (operationDisplay.innerText === "arccos" && operationDisplay3.innerText) {
        $result.innerText = Math.acos(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.acos(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI).toFixed(11);
        }
    }

    else if (operationDisplay.innerText === "arctan" && operationDisplay3.innerText) {
        $result.innerText = Math.atan(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.atan(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI).toFixed(11);
        }
    }

    else if (operationDisplay.innerText === "log" && operationDisplay3.innerText) {
        $result.innerText = Math.log10(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log10(parseFloat(operationDisplay3.innerText))).toFixed(11);
        }
    }


    else if (operationDisplay.innerText === "In" && operationDisplay3.innerText) {
        $result.innerText = Math.log(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log(parseFloat(operationDisplay3.innerText))).toFixed(11);
        }
    }
    else if (operationDisplay.innerText === "√" && operationDisplay3.innerText) {
        $result.innerText = Math.sqrt(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log(parseFloat(operationDisplay3.innerText))).toFixed(11);
        }
    }
    else if (operationDisplay.innerText === "∛" && operationDisplay3.innerText) {
        $result.innerText = Math.cbrt(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log(parseFloat(operationDisplay3.innerText))).toFixed(11);
        }
    }
    else if (operationDisplay.innerText == "e" && operationDisplay3.innerText) {
        if (operationDisplay2.innerText == "+") {
            $result.innerText = 2.71828 + parseFloat(operationDisplay3.innerText)
        }
        else if (operationDisplay2.innerText == "-") {
            $result.innerText = 2.71828 - parseFloat(operationDisplay3.innerText)
        }
        else if (operationDisplay2.innerText == "/") {
            $result.innerText = 2.71828 / parseFloat(operationDisplay3.innerText)

            if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
                $result.innerText = (2.71828 / parseFloat(operationDisplay3.innerText)).toFixed(11);
            }
        }
        else if (operationDisplay2.innerText == "x") {
            $result.innerText = 2.71828 * parseFloat(operationDisplay3.innerText)
        }

    }
    else if (operationDisplay3.innerText == "e" && operationDisplay.innerText) {
        if (operationDisplay2.innerText == "+") {
            $result.innerText = parseFloat(operationDisplay.innerText) + 2.71828
        }
        else if (operationDisplay2.innerText == "-") {
            $result.innerText = parseFloat(operationDisplay.innerText) - 2.71828
        }
        else if (operationDisplay2.innerText == "/") {
            $result.innerText = parseFloat(operationDisplay.innerText) / 2.71828
            if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
                $result.innerText = (parseFloat(operationDisplay.innerText) / 2.71828).toFixed(11);
            }
        }
        else if (operationDisplay2.innerText == "x") {
            $result.innerText = parseFloat(operationDisplay.innerText) * 2.71828
        }

    }
    else if (operationDisplay.innerText == "π" && operationDisplay3.innerText) {
        if (operationDisplay2.innerText == "+") {
            $result.innerText = (22 / 7) + parseFloat(operationDisplay3.innerText)
        }
        else if (operationDisplay2.innerText == "-") {
            $result.innerText = (22 / 7) - parseFloat(operationDisplay3.innerText)
        }
        else if (operationDisplay2.innerText == "/") {
            $result.innerText = (22 / 7) / parseFloat(operationDisplay3.innerText)

            if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
                $result.innerText = ((22 / 7) / parseFloat(operationDisplay3.innerText)).toFixed(11);
            }
        }
        else if (operationDisplay2.innerText == "x") {
            $result.innerText = (22 / 7) * parseFloat(operationDisplay3.innerText)
        }
    }
    else if (operationDisplay3.innerText == "π" && operationDisplay.innerText) {
        if (operationDisplay2.innerText == "+") {
            $result.innerText = parseFloat(operationDisplay.innerText) + (22 / 7)
        }
        else if (operationDisplay2.innerText == "-") {
            $result.innerText = parseFloat(operationDisplay.innerText) - (22 / 7)
        }
        else if (operationDisplay2.innerText == "/") {
            $result.innerText = parseFloat(operationDisplay.innerText) / (22 / 7)
            if ($result.innerText.length > 15 && $result.innerText.includes(".")) {
                $result.innerText = (parseFloat(operationDisplay.innerText) / (22 / 7)).toFixed(11);
            }
        }
        else if (operationDisplay2.innerText == "x") {
            $result.innerText = parseFloat(operationDisplay.innerText) * (22 / 7)
        }
    }
}

// clear all values operation
function clearAll() {
    $result.innerText = null;
    operationDisplay.innerText = null;
    operationDisplay3.innerText = null
    operationDisplay2.innerText = null
}
//backspace
function backSpace() {
    if (operationDisplay.innerText && operationDisplay2.innerText == "" && operationDisplay3.innerText == "" && $result.innerText == "") {
        operationDisplay.innerText = operationDisplay.innerText.substring(0, operationDisplay.innerText.length - 1)
    }
    else if (operationDisplay2.innerText && operationDisplay3.innerText == "" && $result.innerText == "") {
        operationDisplay2.innerText = operationDisplay2.innerText.substring(0, operationDisplay2.innerText.length - 1)
    }
    else if (operationDisplay.innerText && operationDisplay3.innerText && $result.innerText == "") {
        operationDisplay3.innerText = operationDisplay3.innerText.substring(0, operationDisplay3.innerText.length - 1)
    }
    else if (operationDisplay.innerText && operationDisplay3.innerText && $result.innerText) {
        $result.innerText = $result.innerText.substring(0, $result.innerText.length - 1)
    }
}