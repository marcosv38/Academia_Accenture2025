import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';
import GlobalsValidations from '../ValidacoesGlobais';

const fakeDate = moment(faker.date.past(10)).format('MM/DD/YYYY');

class VehiceData {

    validatePageAcess(vehice) {

        cy.url().should('contains', '/101/app.php')
        //Verifica se o título da página está correto
        cy.get(el.LABEL_VEHICE_TYPE).should('have.text', vehice.charAt(0).toUpperCase() + vehice.slice(1) + ' Insurance')

        GlobalsValidations.pageValidation(el.SPAN_COUNTER_FIELDS, 'Enter Vehicle Data');

    }

    fillVehicleData(vehice, fields) {

        cy.get(el.SELECT_MAKE)
            .find('option') // pega todas as opções do select
            .then(options => {
                const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                const selectedValue = Cypress._.sample(values);
                cy.get(el.SELECT_MAKE).select(selectedValue)
                Cypress.env('make', selectedValue);
                cy.log('Selected make: ' + selectedValue);
            });

        cy.get(el.INPUT_PERFORMANCE).clear().type(faker.number.int({ min: 1, max: 2000 }))
        cy.get(el.INPUT_MANUFACTURE).clear().should('have.attr', 'placeholder', 'MM/DD/YYYY').type(fakeDate);


        Cypress.env('listPrice', Math.trunc(faker.number.int({ min: 500, max: 100000 })));
        Cypress.env('annualMileage', Math.trunc(faker.number.int({ min: 100, max: 100000 })));

        cy.get(el.INPUT_MILEAGE).clear().type(Cypress.env('annualMileage'))
        cy.get(el.INPUT_PRICE).clear().type(Cypress.env('listPrice'))





        if (vehice === 'camper' || vehice === 'truck') {

            cy.get(el.SELECT_FUEL)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_FUEL).select(Cypress._.sample(values))
                });

            cy.get(el.INPUT_PAYLOAD).clear().type(faker.number.int({ min: 1, max: 1000 }))
            cy.get(el.INPUT_TOTAL_WEIGHT).clear().type(faker.number.int({ min: 100, max: 50000 }))

            cy.get(el.SELECT_NUMBERSEATS)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_NUMBERSEATS).select(Cypress._.sample(values))
                });
            if (fields != 'obrigatórios')
                cy.get(el.INPUT_PLATE).clear().type(faker.number.int({ min: 1000000000, max: 9000000000 }))

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
                if (fields != 'obrigatórios')
                    cy.get(el.INPUT_PLATE).clear().type(faker.number.int({ min: 1000000000, max: 9000000000 }))
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
                cy.get(el.INPUT_CYLINDERS).clear().type(faker.number.int({ min: 1, max: 2000 }))
                break;
            case 'camper':
                if (fields != 'obrigatórios')
                    cy.get(el.RADIO_HAND).click({ force: true })
                break;
        }

        GlobalsValidations.fillFormsValidation(fields, el.SPAN_COUNTER_FIELDS)

    }

    vehicleDataValidate(vehice, type) {

        cy.get(el.SELECT_MAKE).select(3)

        //BVA campo performance
        GlobalsValidations.verifyFieldRange(el.INPUT_PERFORMANCE, 1, 2000)

        //BVA campo manufacture date
        GlobalsValidations.verifyFieldRangeDate(el.INPUT_MANUFACTURE, moment(), "-", "past")

        //BVA campo Price
        GlobalsValidations.verifyFieldRange(el.INPUT_PRICE, 500, 100000)


        //BVA campo Mileage
        GlobalsValidations.verifyFieldRange(el.INPUT_MILEAGE, 100, 100000)


        if (vehice === 'camper' || vehice === 'truck') {

            cy.get(el.SELECT_FUEL).select(1)

            //BVA campo Payload
            GlobalsValidations.verifyFieldRange(el.INPUT_PAYLOAD, 1, 1000)

            //BVA campo TOTAL_WEIGHT
            GlobalsValidations.verifyFieldRange(el.INPUT_TOTAL_WEIGHT, 100, 50000)

        } else if (vehice === 'motorcycle') {
            //BVA campo INPUT_CYLINDERS
            GlobalsValidations.verifyFieldRange(el.INPUT_CYLINDERS, 1, 2000)
        }
    }

    nextPageVehicle() {
        cy.get(el.BUTTON_NEXT).click();
    }





}

export default new VehiceData();