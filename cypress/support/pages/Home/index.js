import { elements as el } from "./elements";

class Home {

    visitPage() {
        cy.visit('/')
    }

    selectVehicle(veiculo) {
        cy.get(el.BTN_VEHICLE_TYPE + veiculo).should('be.visible');
        cy.log('Botão de ' + veiculo + ' visível');
        cy.get(el.BTN_VEHICLE_TYPE + veiculo).click();
    }
}

export default new Home();