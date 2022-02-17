const inputIncome = document.getElementById('inputIncome');
const inputExpenseFood = document.getElementById('inputExpenseFood');
const inputExpenseRent = document.getElementById('inputExpenseRent');
const inputExpenseCloths = document.getElementById('inputExpenseCloths');
const popupError = document.getElementById('popupError');
const inputExpenseSave = document.getElementById('inputExpenseSave');
const buttonCalculate = document.getElementById('buttonCalculate');

buttonCalculate.addEventListener('click', function () {
    popupError.style.display = 'none';
    inputIncome.style.borderColor = 'black';
    inputExpenseFood.style.borderColor = 'black';
    const incomeInputNumberValidation = parseInt(inputIncome.value);

    if (typeof (parseInt(inputIncome.value)) != 'number' || inputIncome.value < 0 || inputIncome.value == "") {
        inputIncome.style.borderColor = 'red';
        popupError.style.display = 'block';
        document.getElementById('popupErrorInnerText').innerText = "Income must be a number"

    }
    else if (incomeInputNumberValidation > 0) {
        console.log('success')
    }

    else if (inputExpenseFood.value < 0 || inputExpenseFood.value == '' || typeof (parseInt(inputExpenseFood.value)) != 'number') {
        inputExpenseFood.style.borderColor = 'red';
        popupError.style.display = 'block';
        document.getElementById('popupErrorInnerText').innerText = "Input must be positive number"
    }

    else {
        inputIncome.style.borderColor = 'black';
        inputExpenseFood.style.borderColor = 'black';
        inputExpenseRent.style.borderColor = 'black';
        inputExpenseCloths.style.borderColor = 'black';

    }
    console.log(incomeInputNumberValidation)
    console.log(typeof (parseInt(inputIncome.value)))
    console.log(typeof (parseInt(inputIncome.value)))
    console.log(typeof (parseInt(inputIncome.value) == 'number'))
    console.log(isNaN(incomeInputNumberValidation))


})
popupError.addEventListener('click', function () {
    popupError.style.display = 'none';


})