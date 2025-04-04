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
        cy.intercept('POST', '**/tcpdf/pdfs/quote.php').as('getQuote');
        cy.wait('@getQuote', { timeout: 15000 }).then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(JSON.stringify(interception.response.body)).to.include("Suc");
            cy.log('Email enviado com sucesso!');
        });
        cy.get(el.MODAL_SEND_QUOTE, { timeout: 5000 }).should('be.visible');
        
        cy.get(el.MODAL_SEND_QUOTE).contains('Sending e-mail success!');
        cy.get(el.BTN_CONFIRM_QUOTE).click();
    }

}

export default new SendQuote();