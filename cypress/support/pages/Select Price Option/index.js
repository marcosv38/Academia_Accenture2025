import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';
const typePlan = faker.number.int({ min: 0, max: 3 })


class PriceOption{

    choosePrice(){

        switch(typePlan){
            case 0:
                cy.get(el.RADIO_SILVER).click({force: true});
                
                cy.get(el.SPAN_SILVER).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Silver');
                    
                })
                cy.log(`O plano escolhido foi o Silver no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 1:
                cy.get(el.RADIO_GOLD).click({force: true});

                cy.get(el.SPAN_GOLD).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Gold');
                })
                cy.log(`O plano escolhido foi o Gold no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 2:
                cy.get(el.RADIO_PLATINUM).click({force: true});

                cy.get(el.SPAN_PLATINUM).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Platinum');
                })
                cy.log(`O plano escolhido foi o Platinum no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
            case 3:
                cy.get(el.RADIO_ULTIMATE).click({force: true});

                cy.get(el.SPAN_ULTIMATE).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Ultimate');
                })
                cy.log(`O plano escolhido foi o Ultimate no valor de: R$ ${Cypress.env('priceInsurant')}`);
                break;
        }

        cy.get(el.INPUT_NEXT, { timeout: 5000 }).should('be.visible');
        
    }
    
}

export default new PriceOption();