import { elements as el} from "./elements";
import faker from 'faker-br';


const dataAniversario = faker.date.past(30);
const mes = String(dataAniversario.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const dia = String(dataAniversario.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const ano = dataAniversario.getFullYear()-18; 
const removerAcentos = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

class InsuranceData{

    inserirDadosInsurance(){
        cy.get(el.INPUT_FIRSTNAME).type(removerAcentos(faker.name.firstName()));
        cy.get(el.INPUT_LASTNAME).type(removerAcentos(faker.name.lastName()));
        cy.get(el.INPUT_BIRTHDATE).type(`${mes}/${dia}/${ano}`);
        cy.get(el.RADIO_GENDER).click();
        cy.get(el.INPUT_STREET_ADRESS).type(faker.address.streetName());
        cy.get(el.SELECT_COUNTRY).select(Math.trunc(Math.random()*30)+1);
        cy.get(el.INPUT_ZIPCODE).type(faker.address.zipCode().replace('-', ''));
        cy.get(el.INPUT_CITY).type(faker.address.city());
        cy.get(el.SELECT_OCCUPATION).select(Math.trunc(Math.random()*5)+1);
        cy.get(el.CHECKBOX_HOBBIES).click();
        cy.get(el.INPUT_WEB_SITE).type('www.teste.com.br');
        cy.get(el.INPUT_UPLOAD_IMG).selectFile('channels4_profile.jpg', { force: true });
        cy.get(el.INPUT_NEXT).click();
    }

}

export default new InsuranceData();