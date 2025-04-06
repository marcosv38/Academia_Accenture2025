import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import GlobalsValidations from '../ValidacoesGlobais';


const userFaker = {
    email: faker.internet.email(),
    comment: faker.lorem.sentence(20),
}

class SendQuote {

    sendQuote(fields) {

        cy.get(el.LOADER_QUOTE).should('not.be.visible');//Verificar se o loader está invisível
        GlobalsValidations.pageValidation(el.SPAN_COUNTER_FIELDS,'Send Quote')

        if (fields != 'inválidos') {

            cy.get(el.INPUT_EMAIL).type(userFaker.email, { log: false });
            cy.get(el.INPUT_PHONE).type(Cypress.env('phoneQuote'), { log: false });
            cy.get(el.INPUT_USERNAME).type(Cypress.env('userNameQuote'), { log: false });
            cy.get(el.INPUT_PASSWORD).type(Cypress.env('passwordQuote'), { log: false });
            cy.get(el.INPUT_CONFIRM).type(Cypress.env('passwordQuote'), { log: false });
            Cypress.env('emailQuote', userFaker.email)//Salvando dados no ambiente
            
        } else {

            cy.get(el.INPUT_EMAIL).type('mariaAntonia231gmail.com');
            cy.get(el.INPUT_PHONE).type('00 0000-0000');
            cy.get(el.INPUT_USERNAME).type('mária-Ântoniã', { log: false });
            cy.get(el.INPUT_PASSWORD).type('ddd81', { log: false });
            cy.get(el.INPUT_CONFIRM).type('trr82', { log: false });
            
        }

        cy.get(el.INPUT_COMMENTS).type(userFaker.comment);
        

        GlobalsValidations.fillFormsValidation(fields, el.SPAN_COUNTER_FIELDS);

    }

    clickSendQuote() {
        cy.get(el.INPUT_SEND_EMAIL).click({force:true});
    }

    nextSendQuote() {
        cy.get(el.INPUT_NEXT).click();
    }

    validateSendProposal() {

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

    //Verifica se a página está respondendo ao erro localizado em outras abas
    sendQuoteError() {

        GlobalsValidations.pageValidation(el.SPAN_COUNTER_FIELDS,'Send Quote')
        cy.get(el.LOADER_QUOTE)
            .find('p')
            .should('be.visible')
            .and('contain', 'Please, select a price option to send the quote.');

    }


    validateErrorMessage() {

        cy.get(el.MODAL_ERROR, { timeout: 5000 }).should('be.visible')//Existe campo inválido
        cy.get(el.MODAL_ALERT_ERROR).then(($span) => {
            expect($span.text()).to.equal('Not finished yet...');
        });
        cy.log('Mensagem de alerta, Foi exibida!');
        cy.get(el.MODAL_BTN_CONFIRM).click();

    }


}

export default new SendQuote();