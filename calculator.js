class calculate {
    constructor(inputval) {
        this.inputval = inputval;
        this.clear()

    }
    clear() {

        this.input_value = "";
        this.operation = undefined;
    }
    appendnumber(number) {
        this.input_value = this.input_value + number;

    }
    updatedisplay() {
        this.inputval.innerText = this.input_value;

    }
}
const numbuttons = document.querySelectorAll('[data-number]');
console.log(numbuttons)

const opreatbtn = document.querySelectorAll('[data-opreation]')

const equalbtn = document.querySelector('[data-equals]')

const clearbtn = document.querySelector('[data-all-clear]')

const inputval = document.querySelectorAll('[data-input]')
console.log(inputval)

document.addEventListener('DOMContentLoaded', () => {
    const calc = new calculate(
        inputval
    );
    numbuttons.forEach((button) => {
        button.addEventListener('click', ()=> {
            event.preventDefault();
            calc.appendnumber(button.innerText)
            console.log(button.innerText)
            calc.updatedisplay()
        })
    })
})
























// function calculate(){
//     calculatorform.screen.value = eval(calculatorform.screen.value)
// }