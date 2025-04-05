import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const fakeDate = moment(faker.date.past(10)).format('MM/DD/YYYY');

class VehiceData {

    validatePageAcess(vehice) {

        cy.url().should('contains', '/101/app.php')
        cy.get(el.LABEL_VEHICE_TYPE).should('have.text', vehice.charAt(0).toUpperCase() + vehice.slice(1) + ' Insurance')

    }

    fillVehicleData(vehice) {

        cy.get(el.SELECT_MAKE)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                const selectedValue = Cypress._.sample(values);
                cy.get(el.SELECT_MAKE).select(selectedValue)
                Cypress.env('make', selectedValue);
                cy.log('Selected make: ' + selectedValue);
            });

        cy.get(el.INPUT_PERFORMANCE).type(Math.trunc(Math.random() * 1999) + 1)
        cy.get(el.INPUT_MANUFACTURE).type(fakeDate)

        Cypress.env('listPrice', Math.trunc(Math.random() * (100000 - 500) + 500));
        cy.get(el.INPUT_PRICE).type(Cypress.env('listPrice'))

        Cypress.env('annualMileage', Math.trunc(Math.random() * (100000 - 100) + 100));
        cy.get(el.INPUT_MILEAGE).type(Cypress.env('annualMileage'))


        if (vehice === 'camper' || vehice === 'truck') {

            cy.get(el.SELECT_FUEL)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_FUEL).select(Cypress._.sample(values))
                });

            cy.get(el.INPUT_PAYLOAD).type(Math.trunc(Math.random() * 999) + 1)
            cy.get(el.INPUT_TOTAL_WEIGHT).type(Math.trunc(Math.random() * (50000 - 100) + 100))

            cy.get(el.SELECT_NUMBERSEATS)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_NUMBERSEATS).select(Cypress._.sample(values))
                });

            cy.get(el.INPUT_PLATE).type(Math.floor(1000000000 + Math.random() * 9000000000))

        }

        switch (vehice) {
            case 'automobile':
                cy.get(el.SELECT_FUEL)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_FUEL).select(Cypress._.sample(values))
                });
                cy.get(el.SELECT_NUMBERSEATS)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_NUMBERSEATS).select(Cypress._.sample(values))
                });

                cy.get(el.INPUT_PLATE).type(Math.floor(1000000000 + Math.random() * 9000000000))
                break;
            case 'motorcycle':
                cy.get(el.SELECT_NUMBERSEATS_MOTORCYCLE)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_NUMBERSEATS_MOTORCYCLE).select(Cypress._.sample(values))
                });
                cy.get(el.SELECT_MODEL)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_MODEL).select(Cypress._.sample(values))
                });
                cy.get(el.INPUT_CYLINDERS).type(Math.trunc(Math.random() * 1999) + 1)
                break;
            case 'camper':
                cy.get(el.RADIO_HAND).click({ force: true })
                break;
        }

        cy.get(el.SPAN_COUNTER_FILDS).find('span').should('have.text', '0')

        cy.get(el.BUTTON_NEXT).click()
    }

}

export default new VehiceData();