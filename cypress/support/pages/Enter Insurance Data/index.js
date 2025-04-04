import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';



const fakeDateBirth = faker.date.past(51);
const month = String(fakeDateBirth.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const day = String(fakeDateBirth.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const year = fakeDateBirth.getFullYear()-18; 
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

class InsuranceData{

    fillDataInsurance(){
        cy.get(el.INPUT_FIRSTNAME).type(removeAccents(faker.person.firstName()));
        cy.get(el.INPUT_LASTNAME).type(removeAccents(faker.person.lastName()));
        cy.get(el.INPUT_BIRTHDATE).type(`${month}/${day}/${year}`);
        cy.get(el.RADIO_GENDER).click();
        cy.get(el.INPUT_STREET_ADRESS).type(faker.location.street());
        cy.get(el.SELECT_COUNTRY).select(Math.trunc(Math.random()*30)+1);
        cy.get(el.INPUT_ZIPCODE).type(faker.location.zipCode().replace('-', ''));
        cy.get(el.INPUT_CITY).type(faker.location.city());
        cy.get(el.SELECT_OCCUPATION).select(Math.trunc(Math.random()*5)+1);
        cy.get(el.CHECKBOX_HOBBIES).click();
        cy.get(el.INPUT_WEB_SITE).type('www.teste.com.br');
        cy.get(el.INPUT_UPLOAD_IMG).selectFile('channels4_profile.jpg', { force: true });
        cy.get(el.INPUT_NEXT).click();
    }

}

export default new InsuranceData();