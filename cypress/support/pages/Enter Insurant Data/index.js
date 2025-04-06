import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import VehiceData from '../Enter Vehicle Data'
import moment from 'moment';

const fakeDateBirth = faker.date.past(51);
const month = String(fakeDateBirth.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const day = String(fakeDateBirth.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const year = fakeDateBirth.getFullYear() - 18;
let fName = 'dsda';

// Remove acentos e caracteres especiais
const removeAccents = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z]/g, '');

const user = {
    lastName: removeAccents(faker.person.lastName().replace(/[-']/g, '')),
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
        cy.get(el.SPAN_COUNTER_FIELDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Enter Insurant Data validada com sucesso!! Preenchendo os dados solicitados...');

        
        if (el.RADIO_GENDER === '#genderfemale') {
            fName = removeAccents(faker.person.firstName({ sex: 'female' }).replace(/[-']/g, ''))
        } else {
            fName = removeAccents(faker.person.firstName({ sex: 'male' }).replace(/[-']/g, ''))
        }

        cy.get(el.INPUT_FIRSTNAME).clear().type(fName)
        Cypress.env('firstName', fName);


        cy.get(el.INPUT_LASTNAME).clear().type(user.lastName)
        Cypress.env('lastName', user.lastName);


        cy.get(el.INPUT_BIRTHDATE).should('have.attr', 'placeholder', 'MM/DD/YYYY').clear().type(`${month}/${day}/${year}`);

        cy.get(el.SELECT_COUNTRY)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                cy.get(el.SELECT_COUNTRY).select(Cypress._.sample(values))
            });

        cy.get(el.INPUT_ZIPCODE).clear().type(user.zipCode);


        cy.get(el.SELECT_OCCUPATION)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                cy.get(el.SELECT_OCCUPATION).select(Cypress._.sample(values))
            });

        cy.get(el.CHECKBOX_HOBBIES).check({ force: true });

        if (fields != 'obrigatórios') {
            cy.get(el.RADIO_GENDER).check({ force: true });
            cy.get(el.INPUT_STREET_ADRESS).clear().type(user.streetAddress);
            cy.get(el.INPUT_CITY).clear().type(faker.location.city());
            cy.get(el.INPUT_WEB_SITE).clear().type(user.webSite);
            cy.get(el.INPUT_UPLOAD_IMG).selectFile('Cypress/assets/channels4_profile.jpg', { force: true });
        }


        if (fields != 'inválidos') {
            //validação de campos obrigatórios
            cy.get(el.SPAN_COUNTER_FIELDS).find('span')
                .then(($span) => {
                    expect($span.text()).to.equal('0');
                });
            cy.get(el.FIELD_INVALID).should('not.exist')//Não existe campo inválido

            cy.log('Todos os campos preenchidos com sucesso!');


        }
    }

    nextPageInsurance() {
        cy.get(el.INPUT_NEXT).click();
    }

    fillInvalidDataInsurance() {

        this.fillDataInsurance('obrigatórios');

        cy.get(el.SELECT_OCCUPATION).select('default')//Seleciona opção inválida

        cy.get(el.SPAN_ERROR).should('be.visible')

        //validação de campos obrigatórios
        cy.get(el.SPAN_COUNTER_FIELDS).find('span').then(($span) => {
            expect($span.text()).not.to.equal('0');
        });

        cy.get(el.FIELD_INVALID).should('exist')//Existe campo inválido
        cy.log('Campos inválidos foram detectados!');
    }


    insuranceDataBVA() {

        VehiceData.verifyFieldRangeDate(el.INPUT_BIRTHDATE, moment().subtract(18, 'years').format('MM/DD/YYYY'), moment().subtract(70, 'years').format('MM/DD/YYYY'),"past");
        VehiceData.verifyFieldRange(el.INPUT_ZIPCODE,1000,99999999)

    }



}

export default new InsuranceData();