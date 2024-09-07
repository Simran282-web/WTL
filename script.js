function displayMessage() {
    // Get the user's input from the input field
    var userName = document.getElementById('username').value;

    // Create the message
    var message = "Hello " + userName + "… Welcome To the World of JavaScript";

    // Display the message in the h2 element
    document.getElementById('message').textContent = message;
}
