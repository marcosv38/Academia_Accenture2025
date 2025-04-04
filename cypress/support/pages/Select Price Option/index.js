import { elements as el} from "./elements";
const typePlan = Math.trunc(Math.random()*4)


class PriceOption{

    choosePrice(){

        switch(typePlan){
            case 0:
                cy.get(el.RADIO_SILVER).click();
                
                cy.get(el.SPAN_SILVER).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Silver');
                    
                })

                break;
            case 1:
                cy.get(el.RADIO_GOLD).click();

                cy.get(el.SPAN_GOLD).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Gold');
                })

                break;
            case 2:
                cy.get(el.RADIO_PLATINUM).click();

                cy.get(el.SPAN_PLATINUM).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Platinum');
                })

                break;
            case 3:
                cy.get(el.RADIO_ULTIMATE).click();

                cy.get(el.SPAN_ULTIMATE).invoke('text').then((value) => {
                    Cypress.env('priceInsurant', value);
                    Cypress.env('typeInsurant', 'Ultimate');
                })

                break;
        }

        cy.get(el.INPUT_NEXT, { timeout: 5000 }).should('be.visible');
        
    }
    
}

export default new PriceOption();