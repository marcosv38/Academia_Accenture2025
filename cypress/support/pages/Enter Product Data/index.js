import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const fakeDateStart = moment(faker.date.future(5)).format('MM/DD/YYYY');

class ProductData{

   fillDataProduct(){

        cy.get(el.INPUT_START_DATE).type(fakeDateStart);
        cy.get(el.SELECT_INSURANCE).select(Math.trunc(Math.random()*9)+1);
        cy.get(el.SELECT_MERIT).select(Math.trunc(Math.random()*17)+1);
        cy.get(el.SELECT_DAMAGE).select(Math.trunc(Math.random()*3)+1);
        cy.get(el.CHECKBOX_OPTIONS_DAMAGE).click();
        cy.get(el.SELECT_COURTES).select(Math.trunc(Math.random()*2)+1);
        cy.get(el.INPUT_NEXT).click();

    }

}

export default new ProductData();