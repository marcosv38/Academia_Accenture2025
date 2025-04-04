import { elements as el} from "./elements";

class QuoteAnalysis{

    downloadQuote(){
        cy.get(el.BTN_DOWNLOAD).click();
        cy.get(el.LABEL_LOADING, { timeout: 15000 }).should('not.exist');
        cy.get(el.INPUT_PREVIOUS).click({ force: true });
        cy.get(el.INPUT_NEXT, { timeout: 15000 }).should('exist');
        cy.get(el.INPUT_NEXT).click();
    }
    
}

export default new QuoteAnalysis();