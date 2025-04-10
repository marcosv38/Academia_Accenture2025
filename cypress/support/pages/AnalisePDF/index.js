import { elements as el} from "./elements";

class QuoteAnalysis{

    // Função que realiza o download da cotação em PDF
    downloadQuote(){
        
        cy.get(el.BTN_DOWNLOAD).click();

        cy.get(el.LABEL_LOADING, { timeout: 15000 }).should('not.exist');
        cy.get(el.INPUT_PREVIOUS).click({ force: true });
        cy.get(el.INPUT_NEXT, { timeout: 5000 }).should('exist');
        cy.get(el.INPUT_NEXT).click();
        cy.wait(3000);
        cy.task('isFileDownloaded', 'Tricentis_Insurance_Quote.pdf').should('be.true');
        cy.log('Download realizado com sucesso!');
    }

    // Função que analisa o conteúdo do PDF baixado
    analysisPDF(){
        // Usa uma task customizada chamada 'readPdf' para ler o conteúdo do PDF salvo
        cy.task('readPdf', 'cypress/downloads/Tricentis_Insurance_Quote.pdf')
            .should('contain', Cypress.env('make'))
            .and('contain', Cypress.env('lastName'))
            .and('contain', Cypress.env('firstName'))
            .and('contain', Cypress.env('listPrice'))
            .and('contain', Cypress.env('annualMileage'))
            .and('contain', Cypress.env('typeInsurant'))
            .and('contain', Cypress.env('priceInsurant'))
        cy.log('A cotação condiz com os dados informados!');
    }
    
}

export default new QuoteAnalysis();