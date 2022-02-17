const inputIncome = document.getElementById('input-income');

const inputExpenseFood = document.getElementById('inputExpenseFood');
const inputExpenseRent = document.getElementById('inputExpenseRent');
const inputExpenseCloths = document.getElementById('inputExpenseCloths');
const totalExpense = document.getElementById('totalExpense');
const balance = document.getElementById('balance');
const popupError = document.getElementById('popupError');
const inputExpenseSave = document.getElementById('inputExpenseSave');
const buttonCalculate = document.getElementById('button-calculate');
const buttonSave = document.getElementById('buttonSave');
buttonCalculate.addEventListener('click', function () {
    inputIncome.style.borderColor = 'black';
    inputExpenseFood.style.borderColor = 'black';
    inputExpenseRent.style.borderColor = 'black';
    inputExpenseCloths.style.borderColor = 'black';
    popupError.style.display = 'none';
    if (isNaN(parseInt(inputIncome.value)) || parseInt(inputIncome.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputIncome);
    }
    else if (isNaN(parseInt(inputExpenseFood.value)) || parseInt(inputExpenseFood.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseFood);
    }
    else if (isNaN(parseInt(inputExpenseRent.value)) || parseInt(inputExpenseRent.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseRent);
    }
    else if (isNaN(parseInt(inputExpenseCloths.value)) || parseInt(inputExpenseCloths.value) < 0) {
        console.log('Invalid Input');
        errorMsg(inputExpenseCloths);
    }
    else {
        totalExpense.innerText = (parseInt(inputExpenseFood.value) + parseInt(inputExpenseRent.value) + parseInt(inputExpenseCloths.value))
        balance.innerText = (inputIncome.value - totalExpense.innerText);
        saveSection();
    }

    // console.log(typeof (parseInt(inputIncome)));
    // console.log(parseInt(inputIncomeValue))

})
buttonSave.addEventListener('click', function () {
    savingAmount.innerText = (balance.innerText / inputExpenseSave.value);
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
})
function errorMsg(fieldName) {
    fieldName.style.borderColor = 'red';
    popupError.style.display = 'block';
    popupErrorInnerText.innerText = 'Input must be positive number';
}
function saveSection() {
    savingAmount.innerText = (balance.innerText / inputExpenseSave.value);
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
}

popupError.addEventListener('click', function () {
    popupError.style.display = 'none';


})