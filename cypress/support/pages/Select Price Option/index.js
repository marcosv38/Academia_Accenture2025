import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
const typePlan = faker.number.int({ min: 0, max: 3 })

class PriceOption {

    choosePrice() {

        cy.get(el.LOADER_PRICE).should('not.be.visible');//Verificar se o loader está invisível


        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Select Price Option');


        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Select Price Option validada com sucesso!! Preenchendo os dados solicitados...');

        switch (typePlan) {
            case 0:
                cy.get(el.RADIO_SILVER).click({ force: true });

                cy.get(el.SPAN_SILVER).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Silver');

                })
                cy.log(`O plano escolhido foi o Silver no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 1:
                cy.get(el.RADIO_GOLD).click({ force: true });

                cy.get(el.SPAN_GOLD).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Gold');
                })
                cy.log(`O plano escolhido foi o Gold no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 2:
                cy.get(el.RADIO_PLATINUM).click({ force: true });

                cy.get(el.SPAN_PLATINUM).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Platinum');
                })
                cy.log(`O plano escolhido foi o Platinum no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 3:
                cy.get(el.RADIO_ULTIMATE).click({ force: true });

                cy.get(el.SPAN_ULTIMATE).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Ultimate');
                })
                cy.log(`O plano escolhido foi o Ultimate no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
        }

        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.equal('0');
        });
        cy.log('Plano selecionado com sucesso!');
        cy.get(el.INPUT_NEXT, { timeout: 5000 }).should('be.visible');

    }

    clickPagePrice() {
        cy.get(el.INPUT_QUOTE).click();
    }

    nextPagePrice(){
        cy.get(el.nextsendquote).click();
    }

    priceOptionsError() {

        cy.get(el.LOADER_PRICE).should('be.visible');//Verificar se o loader está visível
        cy.get(el.LOADER_PRICE)
            .find('p')
            .should('be.visible')
            .and('contain', 'Please, complete the first three steps to see the price table.');

        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Select Price Option');

        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Select Price Option validada com sucesso!!');
    }

    viewPDF() {
        cy.get(el.VIEW_QUOTE).click()
        cy.get(el.MODAL_LOADING, {timeout: 20000}).should('not.exist');
        cy.log('PDF aberto com sucesso!');
    }

}

export default new PriceOption();