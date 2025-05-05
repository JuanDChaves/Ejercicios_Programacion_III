
function esPalindromo(aString) {
    let stringWithoutSpaces = aString.replace(/\s/g, "")
    if (stringWithoutSpaces === stringWithoutSpaces.split("").reverse().join("")) {
        return true
    } else {
        return false
    }

}