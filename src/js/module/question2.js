/**
 * Question 2 - Copy & Paste into console.
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
