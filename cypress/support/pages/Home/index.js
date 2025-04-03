import { elements as el} from "./elements";

class Home{
    
    visitarPagina(){
        cy.visit('/')
    }

    selecionarVeiculo(veiculo){
        cy.get(el.BTN_VEHICLE_TYPE+veiculo).click();
    }
}

export default new Home();