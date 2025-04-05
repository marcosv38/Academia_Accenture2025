import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const randomMonths = faker.number.int({ min: 2, max: 12 });
const fakeDateStart = moment().add(randomMonths, 'months').format('MM/DD/YYYY');

class ProductData{

   fillDataProduct(vehice){

        cy.get(el.INPUT_START_DATE).type(fakeDateStart);
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

        cy.get(el.CHECKBOX_OPTIONS_DAMAGE).click({force:true});
        

        //verifica se o veiculo é um automóvel
        if(vehice === 'automobile'){

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

        cy.get(el.INPUT_NEXT).click();
        
    }

}

export default new ProductData();