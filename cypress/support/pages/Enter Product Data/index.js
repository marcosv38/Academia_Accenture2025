import { elements as el} from "./elements";
import faker from 'faker-br';


const dataStart = faker.date.past(30);
const mes = String(dataStart.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const dia = String(dataStart.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const ano = 2026; 

class ProductData{

    inserirDadosProduct(){

        cy.get(el.INPUT_START_DATE).type(`${mes}/${dia}/${ano}`);
        cy.get(el.SELECT_INSURANCE).select(Math.trunc(Math.random()*9)+1);
        cy.get(el.SELECT_MERIT).select(Math.trunc(Math.random()*17)+1);
        cy.get(el.SELECT_DAMAGE).select(Math.trunc(Math.random()*3)+1);
        cy.get(el.CHECKBOX_OPTIONS_DAMAGE).click();
        cy.get(el.SELECT_COURTES).select(Math.trunc(Math.random()*2)+1);
        cy.get(el.INPUT_NEXT).click();

    }

}

export default new ProductData();