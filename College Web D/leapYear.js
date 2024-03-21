function checkLeapYear() {
    let yearInput = document.getElementById("yearInput").value;
    let year = parseInt(yearInput);

    if (isNaN(year)) {
        document.getElementById("result").textContent = "Please enter a valid year!";
    } else {
        if ((year % 4 == 0 && year % 100!= 0) || year % 400 == 0) {
            document.getElementById("result").textContent = year + " is a leap year!";
        } else {
            document.getElementById("result").textContent = year + " is not a leap year.";
        }
    }
}
