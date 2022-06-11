function displaying(number) {
    let displayed = document.getElementById("display");
    if (displayed.innerHTML === "0") {
        displayed.innerHTML = number;
    } else {
        displayed.innerHTML += number; 
    }
}

function clearDisplay () {
    let displayed = document.getElementById("display");
    displayed.innerHTML = "0";
}