
function generate() {
    
    let passwordLength = prompt('Password length (8-128)');

    if (passwordLength < 8 || passwordLength > 128) {
        do {
            alert("The number of characters you chose was less than 8 or exceed 128");
            passwordLength = prompt('Password length (8-128)');
        }
        while (passwordLength < 8 || passwordLength > 128)   
    }

    let uppercase = confirm("Include uppercase letters?");
    let lowercase = confirm("Include lowercase letters?");
    let numbers = confirm("Include numbers?");
    let specialCharacters = confirm("Include special characters?");

    if (uppercase == false && lowercase == false && numbers == false && specialCharacters == false) {
        do {
            alert("No character types selected. Please select at least one character type?");
            uppercase = confirm("Include uppercase letters?");
            lowercase = confirm("Include lowercase letters?");
            numbers = confirm("Include numbers?");
            specialCharacters = confirm("Include special characters?");
        }
        while (uppercase == false && lowercase == false && numbers == false && specialCharacters == false)
    }

    const uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowCase = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const symbols = "'' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let passwordValues = "";
    let password = "";

    for (i = 0; i < passwordLength; i++) {
        if (uppercase == true) {
            passwordValues = passwordValues + uppCase;
        }
        if (lowercase == true) {
            passwordValues = passwordValues + lowCase;
        } 
        if (numbers == true) {
            passwordValues = passwordValues + num;
        } 
        if (specialCharacters == true) {
            passwordValues = passwordValues + symbols;
        }
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length -1)));
    }

    document.getElementById("textBox").value = password;
}