
function checkCase(aString) {
    let currentCase = ""
    let isUpper = false
    let isLower = false
    for (let i = 0; i <= aString.length - 1; i++) {

        if (aString[i] === aString[i].toLowerCase()) {
            isLower = true
        }

        if (aString[i] === aString[i].toUpperCase()) {
            isUpper = true
        }
    }

    if (isLower && !isUpper) {
        currentCase = "It's Lower Case"
    } else if (isUpper && !isLower) {
        currentCase = "It's Upper Case"
    } else if (isLower && isUpper) {
        currentCase = "It's mixed Case"
    }

    return currentCase
}