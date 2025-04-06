import { elements as el } from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';
import GlobalsValidations from '../ValidacoesGlobais';

const randomMonths = faker.number.int({ min: 2, max: 12 });
const fakeDateStart = moment().add(randomMonths, 'months').format('MM/DD/YYYY');

class ProductData {

  fillDataProduct(fields, vehice) {

    GlobalsValidations.pageValidation(el.SPAN_COUNTER_FIELDS, 'Enter Product Data');

    cy.get(el.INPUT_START_DATE).should('have.attr', 'placeholder', 'MM/DD/YYYY').clear().type(fakeDateStart);
    cy.get(el.SELECT_INSURANCE)
      .find('option') // pega todas as opções do select
      .then(options => {
        const values = [...options].map(opt => opt.value).slice(1);//ignora o primeiro elemento
        cy.get(el.SELECT_INSURANCE).select(Cypress._.sample(values))
      });

    cy.get(el.SELECT_DAMAGE)
      .find('option')
      .then(options => {
        const values = [...options].map(opt => opt.value).slice(1);
        cy.get(el.SELECT_DAMAGE).select(Cypress._.sample(values))
      });

    cy.get(el.CHECKBOX_OPTIONS_DAMAGE).click({ force: true });


    //verifica se o veiculo é um automóvel
    if (vehice === 'automobile') {

      cy.get(el.SELECT_COURTES)
        .find('option')
        .then(options => {
          const values = [...options].map(opt => opt.value).slice(1);
          cy.get(el.SELECT_COURTES).select(Cypress._.sample(values))
        });

      cy.get(el.SELECT_MERIT)
        .find('option')
        .then(options => {
          const values = [...options].map(opt => opt.value).slice(1);
          cy.get(el.SELECT_MERIT).select(Cypress._.sample(values))
        });

    }

    if (fields === 'inválidos') {
      cy.get(el.INPUT_START_DATE).clear();
    }


    GlobalsValidations.fillFormsValidation(fields, el.SPAN_COUNTER_FIELDS)

  }

  ProductDataValidate() {
    cy.get(el.INPUT_START_DATE, { timeout: 5000 }).should('be.visible')
    GlobalsValidations.verifyFieldRangeDate(el.INPUT_START_DATE, moment().add(1, 'months').format('MM/DD/YYYY'), "-", "future");
    cy.log('Validação concluída: Todos os campos dentro do escopo do teste de BVA foram verificados e aprovados com sucesso!');
  }

  nextPageProduct() {
    cy.get(el.INPUT_NEXT).click();
  }
}

export default new ProductData();