const numberButtons = document.querySelectorAll('.calc-num');
const operationButtons = document.querySelectorAll('.calc-operation');
const equalsButton = document.querySelector('.calc-equals');
const deleteButton = document.querySelector('.calc-delete');
const clearButton = document.querySelector('.calc-clear');
const display = document.querySelector('#inputtext');
var operation = undefined
var allowDecimal = true
var firstNum = 0
var secondNum = 0

const buttons = document.querySelector('.calc');

function alignDisplay(direction) {
    if(direction === 'l') {
        display.classList.remove('display-enter')
        display.classList.add('display-result')  
    } else if(direction === 'r') {
        display.classList.remove('display-result')
        display.classList.add('display-enter')
    }
}

function addNumber(displayedNum, buttonContent) {
    if(display.textContent === '0') {
        display.textContent = buttonContent
        console.log(display.textContent)
    } else {
        display.textContent = displayedNum + buttonContent
        console.log(display.textContent)
    }
    alignDisplay('r')
}

function addOperator(displayedNum, buttonContent) {
    if(operation === undefined) {
        firstNum = displayedNum
        operation = buttonContent
        display.textContent = displayedNum + operation
        allowDecimal = true
        alignDisplay('r')
        console.log('operation: ' + operation)
    }
}

function addDecimal(displayedNum) {
    if(allowDecimal === true) {
        display.textContent	= displayedNum + '.'
        allowDecimal = false
        console.log('added decimal')
        alignDisplay('r')
    }
}

function clear() {
    display.textContent = '0'
    firstNum = 0
    secondNum = 0
    operation = undefined
    allowDecimal = true
    alignDisplay('r')
}

function calculate(displayedNum) {
    const result = eval(displayedNum)
    console.log('result:' + result)
    display.textContent = result
    operation = undefined
    firstNum = result
    alignDisplay('l')
}

function deleteLastCharacter() {
    if(display.textContent.slice(-1) === '+' || '-' || '*' || '/' || '%'){
        operation = undefined
    }
    if(display.textContent.slice(-1) === '.') {
        allowDecimal = true
    }
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent.length === 0) {
        display.textContent = display.textContent + '0'
    }
    alignDisplay('r')
    console.log('delete button')
}

buttons.addEventListener('click', e => {
    if (e.target.matches('.calc-button')) {
        const button = e.target
        const action = button.dataset.action
        const buttonContent = button.textContent
        var displayedNum = display.textContent

        // Number Button was pressed
        if(!action) {
            addNumber(displayedNum, buttonContent);
        }

        // Operator Button was pressed
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'modulo' 
        ) { addOperator(displayedNum, buttonContent) }

        // Decimal Button was pressed
        if(action === 'decimal') {
            addDecimal(displayedNum)
        }

        // Clear Button was pressed
        if(action === 'clear') {
            clear()
        }

        // Equals button was pressed
        if(action === 'calculate') {
            calculate(displayedNum)
        }

        // Del Button was pressed
        if(action === 'delete') {
            deleteLastCharacter()
        }
    }
    
})

