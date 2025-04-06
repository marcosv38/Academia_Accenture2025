import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';


const userFaker = {
    email: faker.internet.email(),
    comment: faker.lorem.sentence(20),
}

class SendQuote {

    sendQuote(fields) {

        cy.get(el.LOADER_QUOTE).should('not.be.visible');//Verificar se o loader está invisível

        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Send Quote');


        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Send Quote validada com sucesso!! Preenchendo os dados solicitados...');


        cy.get(el.INPUT_PHONE).type(Cypress.env('phoneQuote'), { log: false });
        cy.get(el.INPUT_USERNAME).type(Cypress.env('userNameQuote'), { log: false });
        cy.get(el.INPUT_PASSWORD).type(Cypress.env('passwordQuote'), { log: false });
        cy.get(el.INPUT_CONFIRM).type(Cypress.env('passwordQuote'), { log: false });
        cy.get(el.INPUT_COMMENTS).type(userFaker.comment);


        if (fields === 'inválidos') {
            cy.get(el.INPUT_EMAIL).type('dasdadda231gmail.com');
        } else {
            cy.get(el.INPUT_EMAIL).type(userFaker.email, { log: false });
        }

        //Salvando dados no ambiente
        Cypress.env('emailQuote', userFaker.email)


        if (fields != 'inválidos') {
            //validação de campos obrigatórios
            cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
                expect($span.text()).to.equal('0');
            });

            cy.get(el.FILD_INVALID).should('not.exist')//Não existe campo inválido
            cy.log('Todos os campos preenchidos com sucesso!');
        } else {

            cy.get(el.LABEL_ERROR).should('be.visible')//Existe campo inválido
            
            //validação de campos obrigatórios
            cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
                expect($span.text()).not.to.equal('0');
            });
            
            cy.get(el.FILD_INVALID).should('exist')//Existe campo inválido
            cy.log('Campos inválidos foram detectados!');
        }


    }


    clickSendQuote() {
        cy.get(el.INPUT_SEND_EMAIL).click();
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

        cy.get(el.LOADER_QUOTE).should('be.visible');//Verificar se o loader está visível
        cy.get(el.LOADER_QUOTE)
            .find('p')
            .should('be.visible')
            .and('contain', 'Please, select a price option to send the quote.');

        cy.get(el.SELECTED_STEP)
            .find('a')
            .should('be.visible')
            .and('contain', 'Send Quote');

        cy.get(el.SPAN_COUNTER_FILDS).find('span').then(($span) => {
            expect($span.text()).to.not.equal('0');
        });

        cy.log('Aba Send Quote Option validada com sucesso!!');
    }


    validateErrorMessage() {

        cy.get(el.FILD_INVALID).should('exist')//Existe campo inválido
        cy.log('Campos inválidos foram detectados!');

        cy.get(el.MODAL_ERROR, {timeout: 5000}).should('be.visible')//Existe campo inválido
        cy.get(el.MODAL_ALERT_ERROR).then(($span) => {
            expect($span.text()).to.equal('Not finished yet...');
        });
        cy.log('Mensagem de alerta, Foi exibida!');
        cy.get(el.MODAL_BTN_CONFIRM).click();
        
    }


}

export default new SendQuote();