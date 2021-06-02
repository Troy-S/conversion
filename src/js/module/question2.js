/**
 * Question 2
 *
 * 1. Copy & Paste into console.
 * 2. Select project budget option.
 */

const projectBudget = document.getElementById('input_1_4');
projectBudget.onclick = (e) => {
    const radios = document.getElementsByName('input_4');
    for (const radio of radios) {
        if (radio.checked) {
            e.preventDefault();
            window.alert(radio.value);
        }
    }
};