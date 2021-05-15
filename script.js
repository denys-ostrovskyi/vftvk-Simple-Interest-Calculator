/*

I will use ECMAScript 2015 - ES6 syntax
Browser support:

    Chrome 58 (Jan 2017)
    Edge 14 (Aug 2016)
    Firefox 54 (Mar 2017)
    Safari 10 (Jul 2016)
    Opera 55 (Aug 2018)

As mentioned on caniuse.com, es6 browser support:
Global	94.59%	+	3.09%	=	97.68%

*/

// Create arrow function compute
const compute = () => {
    // Get principal element as variable
    let principal_element = document.getElementById("principal")
        // Get principal value from element variable
    let principal = principal_element.value
        // Check if value is negative or zero or empty
    if (principal <= 0 || principal == "") {
        // Open confirm dialog
        if (window.confirm('Enter a positive number')) {
            // Set focus on principal input box

            /* We can also clear the box with:
                principal_element.value = ""
            */
            principal_element.focus()
        }
        // return, so the function will not show any results
        return
    }
    // Get values from inputs
    let rate = document.getElementById("rate").value
    let years = document.getElementById("years").value
        // Compute interest
    let interest = principal * years * rate / 100
        // Compute year
    let year = new Date().getFullYear() + parseInt(years)

    // Display the result to user
    document.getElementById("result").innerHTML = "<br>If you deposit <text>" + principal + "</text>,<br>at an interest rate of <text>" + rate + "%</text><br>You will receive an amount of <text>" + interest + "</text>,<br>in the year <text>" + year + "</text><br>"
}

// Create arrow function updateRate
const updateRate = () => {
    // Get value from "rate" slider
    let rateval = document.getElementById("rate").value
        // Display value to user
    document.getElementById("rate_val").innerText = rateval + "%"
}