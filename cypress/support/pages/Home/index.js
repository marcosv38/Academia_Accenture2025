import { elements as el} from "./elements";

class Home{
    
    visitPage(){
        cy.visit('/')
    }

    selectVehicle(veiculo){
        cy.get(el.BTN_VEHICLE_TYPE+veiculo).click();
    }
}

export default new Home();