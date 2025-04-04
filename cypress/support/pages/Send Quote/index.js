import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';



class SendQuote{

    sendQuote(){
        cy.get(el.INPUT_EMAIL).type(Cypress.env('emailQuote'), {log: false});
        cy.get(el.INPUT_PHONE).type(Cypress.env('phoneQuote'), {log: false});
        cy.get(el.INPUT_USERNAME).type(Cypress.env('userNameQuote'), {log: false});
        cy.get(el.INPUT_PASSWORD).type(Cypress.env('passwordQuote'), {log: false});
        cy.get(el.INPUT_CONFIRM).type(Cypress.env('passwordQuote'), {log: false});
        cy.get(el.INPUT_COMMENTS).type(faker.lorem.sentence(20));
        cy.get(el.INPUT_SEND_EMAIL).click();
    }

    validateSendProposal(){
        cy.get(el.MODAL_SEND_QUOTE, { timeout: 15000 }).should('be.visible');
        cy.get(el.MODAL_SEND_QUOTE).contains('Sending e-mail success!');
        cy.get(el.BTN_CONFIRM_QUOTE).click();
    }

}

export default new SendQuote();