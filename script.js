
function displayOpen() {
    let d = new Date();
    let days = d.getDay();
    let hour = d.getHours();
    let message = "";

    if (days == 5) {
        // Closed for vacation (Friday)
        message = `Today We are <span style="color: red; font-weight: bold;">CLOSED</span>`;
    } else {
        message = `Today We are <span style="color: green; font-weight: bold;">OPENED</span>`;
        if (hour >= 16 && hour < 21) {
            message += `<br>You can come here to visit`;
        }
    }

    document.getElementById("active").innerHTML = message;
}
displayOpen();

