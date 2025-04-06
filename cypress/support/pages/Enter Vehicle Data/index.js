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
        cy.get(el.SPAN_COUNTER_FIELDS).find('span').then(($span) => {
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

        cy.get(el.INPUT_PERFORMANCE).clear().type(faker.number.int({ min: 1, max: 2000 }))
        cy.get(el.INPUT_MANUFACTURE).clear().should('have.attr', 'placeholder', 'MM/DD/YYYY').type(fakeDate);

        Cypress.env('listPrice', Math.trunc(faker.number.int({ min: 500, max: 100000 })));
        cy.get(el.INPUT_PRICE).clear().type(Cypress.env('listPrice'))

        Cypress.env('annualMileage', Math.trunc(faker.number.int({ min: 100, max: 100000 })));
        cy.get(el.INPUT_MILEAGE).clear().type(Cypress.env('annualMileage'))


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

        if (fields != 'inválidos') {
            //validação de campos obrigatórios
            cy.get(el.SPAN_COUNTER_FIELDS).find('span').then(($span) => {
                expect($span.text()).to.equal('0');
            });

            cy.get(el.FILD_INVALID).should('not.exist')//Não existe campo inválido
            cy.log('Todos os campos preenchidos com sucesso!');
        } else {
            //validação de campos obrigatórios
            cy.get(el.SPAN_COUNTER_FIELDS).find('span').then(($span) => {
                expect($span.text()).not.to.equal('0');
            });

            cy.get(el.FIELD_INVALID).should('exist')//Existe campo inválido
            cy.log('Campos inválidos foram detectados!');
        }

    }



    vehicleDataBVA(vehice, fields) {

        cy.get(el.SELECT_MAKE).select(3)

        //BVA campo performance
        this.verifyFieldRange(el.INPUT_PERFORMANCE, 1, 2000)

        //BVA campo manufacture date
        this.verifyFieldRangeDate(el.INPUT_MANUFACTURE, moment(), "-", "past")

        //BVA campo Price
        this.verifyFieldRange(el.INPUT_PRICE, 500, 100000)


        //BVA campo Mileage
        this.verifyFieldRange(el.INPUT_MILEAGE, 100, 100000)


        if (vehice === 'camper' || vehice === 'truck') {

            cy.get(el.SELECT_FUEL).select(1)

            //BVA campo Payload
            this.verifyFieldRange(el.INPUT_PAYLOAD, 1, 1000)

            //BVA campo TOTAL_WEIGHT
            this.verifyFieldRange(el.INPUT_TOTAL_WEIGHT, 100, 50000)

        } else if (vehice === 'motorcycle') {
            //BVA campo INPUT_CYLINDERS
            this.verifyFieldRange(el.INPUT_CYLINDERS, 1, 2000)
        }
    }



    nextPageVehicle() {
        cy.get(el.BUTTON_NEXT).click();
    }

    verifyFieldRange(selector, minRange, maxRange) {
        cy.get(selector).clear().type(minRange - 1)
        cy.get(el.FIELD_INVALID).should('exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('be.visible')
        cy.log('Campo inválido: ' + selector + ' - valor: ' + (minRange - 1))
        cy.get(selector).clear().type(minRange)
        cy.get(el.FIELD_INVALID).should('not.exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('not.be.visible')
        cy.log('Campo válido: ' + selector + ' - valor: ' + minRange)

        cy.get(selector).clear().type(maxRange + 1)
        cy.get(el.FIELD_INVALID).should('exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('be.visible')
        cy.log('Campo inválido: ' + selector + ' - valor: ' + (maxRange + 1))
        cy.get(selector).clear().type(maxRange)
        cy.get(el.FIELD_INVALID).should('not.exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('not.be.visible')
        cy.log('Campo válido: ' + selector + ' - valor: ' + maxRange)
        cy.log('Campo aprovado!')
    }




    verifyFieldRangeDate(selector, minRange, maxRange, time) {

        if (time === "past") {
            if (minRange != "-") {
                cy.get(selector).clear().type(moment(minRange).add(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('exist')
                cy.get(el.LABEL_ERROR).should('be.visible')
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(minRange).format('MM/DD/YYYY')))
                cy.get(selector).clear().type(moment(minRange).subtract(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('not.exist')
                cy.get(el.LABEL_ERROR).should('not.be.visible')
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))
            } else
                cy.log('Campo com valor máximo infinito')

            if (maxRange != "-") {
                cy.get(selector).clear().type(moment(maxRange).subtract(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('exist')
                cy.get(el.LABEL_ERROR).should('be.visible')
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(maxRange).format('MM/DD/YYYY')))
                cy.get(selector).clear().type(moment(maxRange).add(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('not.exist')
                cy.get(el.LABEL_ERROR).should('not.be.visible')
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))
                cy.log('Campo aprovado!')
            } else
                cy.log('Campo com valor mínimo infinito')

        } else if (time === "future") {

            if (minRange != "-") {
                cy.get(selector).clear().type(moment(minRange).subtract(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('exist')
                cy.get(el.LABEL_ERROR).should('be.visible')
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(minRange).format('MM/DD/YYYY')))
                cy.get(selector).clear().type(moment(minRange).add(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('not.exist')
                cy.get(el.LABEL_ERROR).should('not.be.visible')
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))
            } else
                cy.log('Campo com valor mínimo infinito')

            if (maxRange != "-") {
                cy.get(selector).clear().type(moment(maxRange).add(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('exist')
                cy.get(el.LABEL_ERROR).should('be.visible')
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(maxRange).format('MM/DD/YYYY')))

                cy.get(selector).clear().type(moment(maxRange).subtract(1, 'days').format('MM/DD/YYYY'))
                cy.get(el.FIELD_INVALID).should('not.exist')
                cy.get(el.LABEL_ERROR).should('not.be.visible')
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))
                cy.log('Campo aprovado!')
            } else
                cy.log('Campo com valor máximo infinito')

        }


    }

}

export default new VehiceData();