'use strict'

// Получение элементов
const inputElement1 = document.getElementById('input1')
const inputElement2 = document.getElementById('input2')
const resultElement = document.getElementById('result')
const btnElement = document.getElementById('btn')

// console.log(inputElement1.value);
// console.log(inputElement1.textContent);

// inputElement1.value = '65'
// inputElement2.value = '186'


function completeWeight(weight, height) {
    let num1 = +weight.value
    let num2 = +height.value
    let conclusion = (num1 / (Math.pow(num2, 2))).toFixed(1)
    resultElement.textContent = conclusion
    if ((num1 && num2) == 0) {
        resultElement.textContent = '---'
    }
}

function getSampleBmi(res) {
    return `
        <div class="card_out">
          <h2>Ваш ИМТ</h2>
          <p id="result">${res}</p>
       </div>
    `
}

btnElement.onclick = function() {
    completeWeight(inputElement1, inputElement2)
    getSampleBmi(resultElement.value)
}