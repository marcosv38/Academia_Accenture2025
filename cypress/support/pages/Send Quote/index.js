import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';

const userFaker = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    comment: faker.lorem.sentence(20),
}

class SendQuote {

    sendQuote() {

        cy.get(el.LOADER_QUOTE).should('not.be.visible');//Verificar se o loader está invisível

        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Send Quote');


        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Send Quote validada com sucesso!! Preenchendo os dados solicitados...');

        cy.get(el.INPUT_EMAIL).type(userFaker.email, { log: false });
        cy.get(el.INPUT_PHONE).type(Cypress.env('phoneQuote'), { log: false });
        cy.get(el.INPUT_USERNAME).type(Cypress.env('userNameQuote'), { log: false });
        cy.get(el.INPUT_PASSWORD).type(userFaker.password, { log: false });
        cy.get(el.INPUT_CONFIRM).type(userFaker.password, { log: false });
        cy.get(el.INPUT_COMMENTS).type(userFaker.comment);

        //Salvando dados no ambiente
        Cypress.env('emailQuote', userFaker.email)
        Cypress.env('passwordQuote', userFaker.password)


        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.equal('0');
        });
        cy.get(el.FILD_INVALID).should('not.exist')
        cy.log('Todos os campos preenchidos com sucesso!');
        cy.get(el.INPUT_SEND_EMAIL).click();
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

}

export default new SendQuote();