// Variable Declearation
const inputIncome = variable('input-income');
const inputExpenseFood = variable('inputExpenseFood');
const inputExpenseRent = variable('inputExpenseRent');
const inputExpenseCloths = variable('inputExpenseCloths');
const totalExpense = variable('totalExpense');
const balance = variable('balance');
const popupError = variable('popupError');
const inputExpenseSave = variable('inputExpenseSave');
const buttonCalculate = variable('button-calculate');
const buttonSave = variable('buttonSave');

// Calculate Button Functionality
buttonCalculate.addEventListener('click', function () {
    inputIncome.style.borderColor = 'black';
    inputExpenseFood.style.borderColor = 'black';
    inputExpenseRent.style.borderColor = 'black';
    inputExpenseCloths.style.borderColor = 'black';
    popupError.style.display = 'none';
    if (isNaN(parseInt(inputIncome.value)) || parseInt(inputIncome.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputIncome, 'Income must be a positive number');
    }
    else if (isNaN(parseInt(inputExpenseFood.value)) || parseInt(inputExpenseFood.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseFood, 'Food Expenses must be a positive number');
    }
    else if (isNaN(parseInt(inputExpenseRent.value)) || parseInt(inputExpenseRent.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseRent, 'Rent Expenses must be a positive number');
    }
    else if (isNaN(parseInt(inputExpenseCloths.value)) || parseInt(inputExpenseCloths.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseCloths, 'Cloth Expenses must be a positive number');
    }
    else {
        totalExpense.innerText = (parseInt(inputExpenseFood.value) + parseInt(inputExpenseRent.value) + parseInt(inputExpenseCloths.value))
        balance.innerText = (inputIncome.value - totalExpense.innerText);
        remainingBalance.innerText = parseInt(balance.innerText);
    }

})
// Saving Section
buttonSave.addEventListener('click', function () {
    popupError.style.display = 'none';
    if (isNaN(parseInt(inputExpenseSave.value)) || parseInt(inputExpenseSave.value) < 0) {
        console.log('Invalid Input');
    }
    else {
        if ((parseInt(inputIncome.value)) * (parseInt(inputExpenseSave.value) / 100) > parseInt(balance.innerText)) {
            // console.log('You cant save more than your remaining balance');
            errorMsg(inputExpenseSave, 'You cant save more than your remaining balance')
        }
        else {
            savingAmount.innerText = (parseInt(inputIncome.value)) * (parseInt(inputExpenseSave.value) / 100);
            remainingBalance.innerText = substract(balance, savingAmount);
            inputExpenseSave.style.borderColor = 'black';
        }
    }
})
//Variable Declearation Function
function variable(idName) {
    return document.getElementById(idName);

}


// Show Error Aleart Function
function errorMsg(fieldName, text) {
    fieldName.style.borderColor = 'red';
    popupError.style.display = 'block';
    popupErrorInnerText.innerText = text;
}

// substract Function
function substract(num1, num2) {
    return parseInt(num1.innerText) - parseInt(num2.innerText);
}

// Close popup Error
popupError.addEventListener('click', function () {
    popupError.style.display = 'none';
})