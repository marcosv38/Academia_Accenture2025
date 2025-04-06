import { elements as el } from "./elements";


class GlobalsValidations {

    pageValidation(SPAN_COUNTER_FIELDS, PAGE_NAME) {

        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', PAGE_NAME);


        cy.get(SPAN_COUNTER_FIELDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba validada com sucesso!! Preenchendo os dados solicitados...');
    }

    fillFormsValidation(fields, SPAN_COUNTER_FIELDS) {

        if (fields != 'inválidos') {

            //validação de campos obrigatórios
            cy.get(SPAN_COUNTER_FIELDS).find('span').then(($span) => {
                expect($span.text()).to.equal('0');
            });

            cy.get(el.FIELD_INVALID).should('not.exist')//Não existe campo inválido
            cy.log('Todos os campos preenchidos com sucesso!');

        } else {

            cy.get(el.LABEL_ERROR).should('be.visible')//Existe campo inválido

            //validação de campos obrigatórios
            cy.get(SPAN_COUNTER_FIELDS).find('span').then(($span) => {
                expect($span.text()).not.to.equal('0');
            });

            cy.get(el.FIELD_INVALID).should('exist')//Existe campo inválido
            cy.log('Campos inválidos foram detectados!');
        }
    }

    verifyFieldRange(selector, minRange, maxRange) {
        
        cy.get(selector).clear().type(minRange - 1)
        this.spanErrorOn();
        cy.log('Campo inválido: ' + selector + ' - valor: ' + (minRange - 1))

        cy.get(selector).clear().type(minRange)
        this.spanErrorOff();
        cy.log('Campo válido: ' + selector + ' - valor: ' + minRange)

        cy.get(selector).clear().type(minRange + 1)
        this.spanErrorOff();
        cy.log('Campo válido: ' + selector + ' - valor: ' + minRange)

        cy.get(selector).clear().type(maxRange + 1)
        this.spanErrorOn();
        cy.log('Campo inválido: ' + selector + ' - valor: ' + (maxRange + 1))

        cy.get(selector).clear().type(maxRange)
        this.spanErrorOff();
        cy.log('Campo válido: ' + selector + ' - valor: ' + maxRange)

        cy.get(selector).clear().type(maxRange - 1)
        this.spanErrorOff();
        cy.log('Campo válido: ' + selector + ' - valor: ' + maxRange)
        cy.log('Campo aprovado!')
    }

    verifyFieldRangeDate(selector, minRange, maxRange, time) {

        if (time === "past") {
            if (minRange != "-") {
                cy.get(selector).clear().type(moment(minRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOn();
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(minRange).format('MM/DD/YYYY')))

                cy.get(selector).clear().type(moment(minRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))

                cy.get(selector).clear().type(moment(minRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))
            } else
                cy.log('Campo com valor máximo infinito')

            if (maxRange != "-") {
                cy.get(selector).clear().type(moment(maxRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOn();
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(maxRange).format('MM/DD/YYYY')))

                cy.get(selector).clear().type(moment(maxRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))

                cy.get(selector).clear().type(moment(maxRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))
                cy.log('Campo aprovado!')
            } else
                cy.log('Campo com valor mínimo infinito')

        } else if (time === "future") {

            if (minRange != "-") {
                cy.get(selector).clear().type(moment(minRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOn();
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(minRange).format('MM/DD/YYYY')))

                cy.get(selector).clear().type(moment(minRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))

                cy.get(selector).clear().type(moment(minRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(minRange).format('MM/DD/YYYY'))
            } else
                cy.log('Campo com valor mínimo infinito')

            if (maxRange != "-") {
                cy.get(selector).clear().type(moment(maxRange).add(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOn();
                cy.log('Campo inválido: ' + selector + ' - valor: ' + (moment(maxRange).format('MM/DD/YYYY')))

                cy.get(selector).clear().type(moment(maxRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))

                cy.get(selector).clear().type(moment(maxRange).subtract(1, 'days').format('MM/DD/YYYY'))
                this.spanErrorOff();
                cy.log('Campo válido: ' + selector + ' - valor: ' + moment(maxRange).format('MM/DD/YYYY'))
                cy.log('Campo aprovado!')
            } else
                cy.log('Campo com valor máximo infinito')

        }


    }

    spanErrorOn() {
        cy.get(el.FIELD_INVALID).should('exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('be.visible')
    }

    spanErrorOff() {
        cy.get(el.FIELD_INVALID).should('not.exist')//Campo inválido
        cy.get(el.LABEL_ERROR).should('not.be.visible')
    }

}

export default new GlobalsValidations();