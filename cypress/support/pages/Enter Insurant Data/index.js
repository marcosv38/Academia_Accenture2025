import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';

const fakeDateBirth = faker.date.past(51);
const month = String(fakeDateBirth.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const day = String(fakeDateBirth.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const year = fakeDateBirth.getFullYear() - 18;

// Remove acentos e caracteres especiais
const removeAccents = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z]/g, '');

const user = {
    firstName: removeAccents(faker.person.firstName().replace('-', '')),
    lastName: removeAccents(faker.person.lastName().replace('-', '')),
    streetAddress: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode('########').replace('-', ''),
    webSite: faker.internet.url(),
}

class InsuranceData {

    fillDataInsurance(fields) {
        //Verifica a aba selecionada
        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Enter Insurant Data');

        //Verifica se o contador de campos é diferente de 0
        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Enter Insurant Data validada com sucesso!! Preenchendo os dados solicitados...');

        cy.get(el.INPUT_FIRSTNAME).type(user.firstName)
        Cypress.env('firstName', user.firstName);


        cy.get(el.INPUT_LASTNAME).type(user.lastName)
        Cypress.env('lastName', user.lastName);


        cy.get(el.INPUT_BIRTHDATE).should('have.attr', 'placeholder', 'MM/DD/YYYY').type(`${month}/${day}/${year}`);

        if(fields != 'obrigatórios'){
            cy.get(el.RADIO_GENDER).check({ force: true });
            cy.get(el.INPUT_STREET_ADRESS).type(user.streetAddress);
            cy.get(el.INPUT_CITY).type(faker.location.city());
            cy.get(el.INPUT_WEB_SITE).type(user.webSite);
            cy.get(el.INPUT_UPLOAD_IMG).selectFile('Cypress/assets/channels4_profile.jpg', { force: true });
        } 

        cy.get(el.SELECT_COUNTRY)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                cy.get(el.SELECT_COUNTRY).select(Cypress._.sample(values))
            });

        cy.get(el.INPUT_ZIPCODE).type(user.zipCode);
        

        cy.get(el.SELECT_OCCUPATION)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                cy.get(el.SELECT_OCCUPATION).select(Cypress._.sample(values))
            });

        cy.get(el.CHECKBOX_HOBBIES).check({ force: true });
        

        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.equal('0');
        });

        cy.get(el.FILD_INVALID).should('not.exist')//Não existe campo inválido
        cy.log('Todos os campos preenchidos com sucesso!');
        cy.get(el.INPUT_NEXT).click();

    }

}

export default new InsuranceData();