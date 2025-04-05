import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const fakeDate = moment(faker.date.past(10)).format('MM/DD/YYYY');

class VehiceData {

    validatePageAcess(vehice) {

        cy.url().should('contains', '/101/app.php')
        //Verifica se o título da página está correto
        cy.get(el.LABEL_VEHICE_TYPE).should('have.text', vehice.charAt(0).toUpperCase() + vehice.slice(1) + ' Insurance')

        //Verifica se o contador de campos é diferente de 0
        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });
        //Verifica a aba selecionada
        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Enter Vehicle Data');

        cy.log('Aba Enter Vehicle Data validada com sucesso!! Preenchendo os dados solicitados...');
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

        cy.get(el.INPUT_PERFORMANCE).type(faker.number.int({ min: 1, max: 2000 }))
        cy.get(el.INPUT_MANUFACTURE).should('have.attr', 'placeholder', 'MM/DD/YYYY').type(fakeDate);

        Cypress.env('listPrice', Math.trunc(faker.number.int({ min: 500, max: 100000 })));
        cy.get(el.INPUT_PRICE).type(Cypress.env('listPrice'))

        Cypress.env('annualMileage', Math.trunc(faker.number.int({ min: 100, max: 100000 })));
        cy.get(el.INPUT_MILEAGE).type(Cypress.env('annualMileage'))


        if (vehice === 'camper' || vehice === 'truck') {

            cy.get(el.SELECT_FUEL)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_FUEL).select(Cypress._.sample(values))
                });

            cy.get(el.INPUT_PAYLOAD).type(faker.number.int({ min: 1, max: 1000 }))
            cy.get(el.INPUT_TOTAL_WEIGHT).type(faker.number.int({ min: 100, max: 50000 }))

            cy.get(el.SELECT_NUMBERSEATS)
                .find('option') // pega todas as opções do select
                .then(options => {
                    const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
                    cy.get(el.SELECT_NUMBERSEATS).select(Cypress._.sample(values))
                });
            if (fields != 'obrigatórios')
                cy.get(el.INPUT_PLATE).type(faker.number.int({ min: 1000000000, max: 9000000000 }))

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
                    cy.get(el.INPUT_PLATE).type(faker.number.int({ min: 1000000000, max: 9000000000 }))
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
                cy.get(el.INPUT_CYLINDERS).type(faker.number.int({ min: 1, max: 2000 }))
                break;
            case 'camper':
                if(fields != 'obrigatórios') 
                    cy.get(el.RADIO_HAND).click({ force: true })
                break;
        }

        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.equal('0');
        });
        cy.get(el.FILD_INVALID).should('not.exist')//Não existe campo inválido
        cy.log('Todos os campos preenchidos com sucesso!');
        cy.get(el.BUTTON_NEXT).click()
    }

}

export default new VehiceData();