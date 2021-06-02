// Grab original form elements
const lnf = document.querySelector('#lastNameField');
const fnf = document.querySelector('#firstNameField');

const nameFieldDisplayStyle = lnf.style.display;

// Hiding original form elements
lnf.style.display = "none";
fnf.style.display = "none";

// insert unified name field
const fullNameField = lnf.cloneNode(true);

// Make sure we dont insert dupe id's
fullNameField.id = 'fullNameField';
fullNameField.querySelector('input').id = 'fullName';

// Change fullName label text & for attribute
fullNameField.querySelector('span span').innerHTML = 'Name';
fullNameField.setAttribute('for', 'fullName');
fullNameField.setAttribute('placeholder', 'Enter your name');

// Turn elements visibility back on
fullNameField.style = nameFieldDisplayStyle;

// Insert new fullNameField
lnf.parentNode.insertBefore(fullNameField, fnf);

// Function to split unified name into first and last name
function splitFullName(fullName) {
    return fullName.split(' ');
}

// Update name fields
function updateNameFields() {
    const [ firstName, lastName ] = splitFullName(document.querySelector('#fullNameField input').value);
    document.querySelector('#firstNameField input').value = firstName;
    document.querySelector('#lastNameField input').value = lastName;
}

// Grab fullName element and set attributes
const fullName = document.getElementById('fullName');
fullName.setAttribute('placeholder', 'Enter your name');
fullName.setAttribute('name', 'name');

// Remove unrequired attributes
fullName.removeAttribute('data-trackable');
fullName.removeAttribute('aria-required');
fullName.removeAttribute('required');

// Attach event listener to unified name fields
fullName.addEventListener('input', updateNameFields);
