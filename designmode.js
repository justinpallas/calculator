const modeButton = document.querySelector('.modeButton')
const container = document.querySelector('.container')
const calc = document.querySelector('.calc')
const disp = document.querySelector('.display')
const keys = document.querySelectorAll('button')
const lightIcon = document.querySelector('.md-light')
const darkIcon = document.querySelector('.md-dark')

var darkmode = false

function toggleMode() {
    if(darkmode === false) {
        darkmode = true
    } else {
        darkmode = false
    }
    console.log('darkmode: ' + darkmode)
}

function removeLightCLasses() {
    container.classList.remove('container-light')
    calc.classList.remove('calc-light')
    disp.classList.remove('display-light')
    for(const key of keys) {
        key.classList.remove('button-light')
    }
    darkIcon.classList.add('hidden')
}

function removeDarkClasses() {
    container.classList.remove('container-dark')
    calc.classList.remove('calc-dark')
    disp.classList.remove('display-dark')
    for(const key of keys) {
        key.classList.remove('button-dark')
    }
    lightIcon.classList.add('hidden')
}

function addLightClasses() {
    container.classList.add('container-light')
    calc.classList.add('calc-light')
    disp.classList.add('display-light')
    for(const key of keys) {
        key.classList.add('button-light')
    }
    darkIcon.classList.remove('hidden')
}

function addDarkClasses() {
    container.classList.add('container-dark')
    calc.classList.add('calc-dark')
    disp.classList.add('display-dark')
    for(const key of keys) {
        key.classList.add('button-dark')
    }
    lightIcon.classList.remove('hidden')
}


modeButton.addEventListener('click', e => {
    toggleMode()
    
    if(darkmode === true) {
        removeLightCLasses()
        addDarkClasses()
    } else {
        removeDarkClasses()
        addLightClasses()
    }
})