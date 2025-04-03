import { elements as el} from "./elements";
import faker from 'faker-br';

const dataPassada = faker.date.past(10);
const mes = String(dataPassada.getMonth() + 1).padStart(2, '0'); // Ajusta para 2 dígitos
const dia = String(dataPassada.getDate()).padStart(2, '0'); // Ajusta para 2 dígitos
const ano = dataPassada.getFullYear(); 

class VehiceData{

    

    visitarVehiceData(){
        cy.visit('/')
    }

    inserirDadosVeiculo(veiculo){
        cy.get(el.SELECT_MAKE).select(Math.trunc(Math.random()*14)+1);
        cy.get(el.INPUT_PERFORMANCE).type(Math.trunc(Math.random()*1999)+1)
        cy.get(el.INPUT_MANUFACTURE).type(`${mes}/${dia}/${ano}`)
        cy.get(el.SELECT_NUMBERSEATS).select(Math.trunc(Math.random()*9)+1)
        cy.get(el.SELECT_FUEL).select(Math.trunc(Math.random()*5)+1)
        cy.get(el.INPUT_PRICE).type(Math.trunc(Math.random()*(100000 - 500)+500))
        cy.get(el.INPUT_PLATE).type(Math.floor(1000000000 + Math.random() * 9000000000))
        cy.get(el.INPUT_MILEAGE).type(Math.trunc(Math.random()*(100000 - 100)+100))
        cy.get(el.BUTTON_NEXT).click()
    }
}

export default new VehiceData();