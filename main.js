//Arithmetic Functionality
var operationDisplay = document.querySelector(".first-operation");
var operationDisplay3 = document.querySelector(".second-operation");
var operationDisplay2 = document.querySelector(".math-operation");
var functionOperation = document.querySelectorAll(".functions");
var $result = document.querySelector(".result");
var $numbers = document.querySelectorAll(".numbers");
var equal = document.querySelector(".numbers-equal");
equal.addEventListener("click", resultOutput);


for (number of $numbers) {
    number.addEventListener("click", numberFunction);
}
function numberFunction(e) {
        
    if (operationDisplay.innerText == "" && e.target.innerText == ".") {
        return;
    } else if (operationDisplay.innerText.includes(".") && e.target.innerText == ".") {
        return;
    } else if (operationDisplay2.innerText != "+" && operationDisplay2.innerText != "x" && operationDisplay2.innerText != "-" && operationDisplay2.innerText != "/" && operationDisplay.innerText != "sin" && operationDisplay.innerText != "cos" && operationDisplay.innerText != "tan" && operationDisplay.innerText != "arcsin" && operationDisplay.innerText != "arccos" && operationDisplay.innerText != "arctan" && operationDisplay.innerText != "log" && operationDisplay.innerText != "e" && operationDisplay.innerText != "In"){
        operationDisplay.innerText += e.target.innerText
        if ((operationDisplay.innerText.length == 16)){
            operationDisplay.innerText = "";
        }
    }
}

for (operation of functionOperation) {
    operation.addEventListener("click", mathOperation)
}
function mathOperation(x) {

    if (x.target.innerText == "+" && operationDisplay.innerText) {
        operationDisplay2.innerText = "+";

        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }
    }
       else if (x.target.innerText == "x" && operationDisplay.innerText) {
            operationDisplay2.innerText = "x";

            for (number of $numbers) {
                number.addEventListener("click", numberFunction);
            }
            function numberFunction(e) {
                if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                    return;
                } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                    return;
                } else {
                    operationDisplay3.innerText += e.target.innerText;
                    if (operationDisplay3.innerText.length == 16) {
                        operationDisplay3.innerText = "";
                    }

    }
}
       }
    else if (x.target.innerText == "-" && operationDisplay.innerText) {
        operationDisplay2.innerText = "-";

        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }
    }
    else if (x.target.innerText == "/" && operationDisplay.innerText) {
        operationDisplay2.innerText = "/";

        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }
    }
    else if ( x.target.innerText == "sin" ){
        operationDisplay.innerText = "sin";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "cos") {
        operationDisplay.innerText = "cos";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "tan") {
        operationDisplay.innerText = "tan";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "asin") {
        operationDisplay.innerText = "arcsin";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "acos") {
        operationDisplay.innerText = "arccos";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "atan") {
        operationDisplay.innerHTML = "arctan";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "log") {
        operationDisplay.innerHTML = "log";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "e") {
        operationDisplay.innerText = "e";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    else if (x.target.innerText == "In") {
        operationDisplay.innerText = "In";
        for (number of $numbers) {
            number.addEventListener("click", numberFunction);
        }
        function numberFunction(e) {
            if (operationDisplay3.innerText == "" && e.target.innerText == ".") {
                return;
            } else if (operationDisplay3.innerText.includes(".") && e.target.innerText == ".") {
                return;
            } else {
                operationDisplay3.innerText += e.target.innerText;
                if (operationDisplay3.innerText.length == 16) {
                    operationDisplay3.innerText = "";
                }

            }
        }

    }
    }

function resultOutput() {
    
    if (operationDisplay2.innerText === "+" && operationDisplay3.innerText){
        $result.innerText = parseFloat(operationDisplay.innerText) + parseFloat(operationDisplay3.innerText);
}
    else if (operationDisplay2.innerText === "x" && operationDisplay3.innerText) {
        $result.innerText = parseFloat(operationDisplay.innerText) * parseFloat(operationDisplay3.innerText)
}
    else if (operationDisplay2.innerText === "-" && operationDisplay3.innerText) {
        $result.innerText = parseFloat(operationDisplay.innerText) - parseFloat(operationDisplay3.innerText)
}
    else if (operationDisplay2.innerText === "/" && operationDisplay3.innerText) {
        $result.innerText = parseFloat(operationDisplay.innerText) / parseFloat(operationDisplay3.innerText)
        if($result.innerText.length > 10 && $result.innerText.includes(".")){
          $result.innerText =  (parseFloat(operationDisplay.innerText) / parseFloat(operationDisplay3.innerText)).toFixed(7);
        
}
    }
        else if (operationDisplay.innerText === "sin" && operationDisplay.innerText){
            $result.innerText = Math.sin(parseFloat(operationDisplay3.innerText)* Math.PI / 180)
            if ($result.innerText.length > 10 && $result.innerText.includes(".")){
                $result.innerText = Math.sin(parseFloat(operationDisplay3.innerText)* Math.PI / 180).toFixed(7);
            }
        }
    else if (operationDisplay.innerText === "cos" && operationDisplay.innerText) {
       $result.innerText = Math.cos(parseFloat(operationDisplay3.innerText)* Math.PI / 180)
            if ($result.innerText.length > 10 && $result.innerText.includes(".")){
                $result.innerText = Math.cos(parseFloat(operationDisplay3.innerText)* Math.PI / 180).toFixed(7);
        }
    }
    else if (operationDisplay.innerText === "tan" && operationDisplay.innerText) {
       $result.innerText = Math.tan(parseFloat(operationDisplay3.innerText)* Math.PI / 180)
            if ($result.innerText.length > 10 && $result.innerText.includes(".")){
                $result.innerText = Math.tan(parseFloat(operationDisplay3.innerText)* Math.PI / 180).toFixed(7);
        }
    }

    else if (operationDisplay.innerText === "arcsin" && operationDisplay.innerText) {
        $result.innerText = Math.asin(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 10 && $result.innerText.includes(".")) {
            $result.innerText = (Math.asin(parseFloat(operationDisplay3.innerText))*180/Math.PI).toFixed(7);
        }
}         
    else if (operationDisplay.innerText === "arccos" && operationDisplay.innerText) {
        $result.innerText = Math.acos(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 10 && $result.innerText.includes(".")) {
            $result.innerText = (Math.acos(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI).toFixed(7);
        }
    }         

    else if (operationDisplay.innerText === "arctan" && operationDisplay.innerText) {
        $result.innerText = Math.atan(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI;
        if ($result.innerText.length > 10 && $result.innerText.includes(".")) {
            $result.innerText = (Math.atan(parseFloat(operationDisplay3.innerText)) * 180 / Math.PI).toFixed(7);
        }
    }

    else if (operationDisplay.innerText === "log" && operationDisplay.innerText) {
        $result.innerText = Math.log10(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 10 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log10(parseFloat(operationDisplay3.innerText))) .toFixed(7);
        }
    }


    else if (operationDisplay.innerText === "In" && operationDisplay.innerText) {
        $result.innerText = Math.log(parseFloat(operationDisplay3.innerText))
        if ($result.innerText.length > 10 && $result.innerText.includes(".")) {
            $result.innerText = (Math.log(parseFloat(operationDisplay3.innerText))).toFixed(7);
        }
    }

}             
                                                                                                                                                                                                                                                                                                                                                                                                                              
