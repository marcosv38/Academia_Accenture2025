import { elements as el} from "./elements";

class PriceOption{

    escolherPrice(){
        cy.get(el.RADIO_PRICE).click();
        cy.get(el.INPUT_NEXT, { timeout: 5000 }).should('be.visible');
        cy.get(el.INPUT_NEXT).click();
    }

}

export default new PriceOption();