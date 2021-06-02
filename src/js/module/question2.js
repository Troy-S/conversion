/**
 * Question 2
 *
 * 1. Copy & Paste into console.
 * 2. Select project budget option.
 */

const projectBudget = document.getElementById('input_1_4');
projectBudget.onclick = (e) => {
    let radios = document.getElementsByName('input_4');
    for (let radio of radios) {
        if (radio.checked) {
            e.preventDefault()
            alert(radio.value)
        }
    }
}