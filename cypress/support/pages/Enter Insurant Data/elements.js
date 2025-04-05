const hobbies = ['#speeding', '#bungeejumping', '#cliffdiving', '#skydiving', '#other'];
const gender = ['#genderfemale', '#gendermale'];

export const elements = {
    INPUT_FIRSTNAME: '#firstname',
    INPUT_LASTNAME: '#lastname',
    INPUT_BIRTHDATE: '#birthdate',
    RADIO_GENDER: Cypress._.sample(gender),
    INPUT_STREET_ADRESS: '#streetaddress',
    SELECT_COUNTRY: '#country',
    INPUT_ZIPCODE: '#zipcode',
    INPUT_CITY: '#city',
    SELECT_OCCUPATION: '#occupation',
    CHECKBOX_HOBBIES: Cypress._.sample(hobbies),
    INPUT_WEB_SITE: '#website',
    INPUT_UPLOAD_IMG: '#picturecontainer',
    INPUT_NEXT: '#nextenterproductdata',
    INPUT_PREVIOUS: '#preventervehicledata',
    SPAN_COUNTER_FILDS: '#enterinsurantdata',
    SELECTED_STEP: '.idealsteps-step-active',
    FILD_INVALID: '.invalid',
    SPAN_ERROR: '.error',
}