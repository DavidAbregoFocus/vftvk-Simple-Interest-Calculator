//To show the rate value in the range element when windows loads
window.onload = updateRate;

function compute() {
    //Getting the form elements values
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;

    //Getting the refence for the result element
    var resultRef = document.getElementById('result');
    //Resetting the result value
    resultRef.innerHTML = '';

    //Validating the principal to be a valid positive number
    if (principal == '' || principal <= 0) {
        alert('Enter a positive number');
        //Setting focus to principal
        document.getElementById('principal').focus();
        return;
    }

    //Calculating the interest
    var interest = (principal * years * rate) / 100;

    //Calculating the year when the interest will be received
    var year = new Date().getFullYear() + parseInt(years);

    //Adding the result of the computations
    resultRef.innerHTML = `If you deposit <span class="highlight">${principal}</span>,<br />`;
    resultRef.innerHTML += `at an interest rate of <span class="highlight">${rate}%</span>.<br />`;
    resultRef.innerHTML += `You will receive an amount of <span class="highlight">${interest}</span>,<br />`;
    resultRef.innerHTML += `in the year <span class="highlight">${year}</span><br />`;
}

//To show the rate when changing the value in the range element
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval + '%';
}
