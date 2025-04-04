import { elements as el} from "./elements";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const fakeDate = moment(faker.date.past(10)).format('MM/DD/YYYY');

class VehiceData{

    validatePageAcess(vehice){
        cy.url().should('eq','https://sampleapp.tricentis.com/101/app.php')
        cy.get(el.LABEL_VEHICE_TYPE).should('have.text',vehice.charAt(0).toUpperCase() + vehice.slice(1)+' Insurance')
    }

    fillVehicleData(vehice){

        cy.get(el.SELECT_MAKE).select(Math.trunc(Math.random()*14)+1)
        cy.get(el.INPUT_PERFORMANCE).type(Math.trunc(Math.random()*1999)+1)
        cy.get(el.INPUT_MANUFACTURE).type(fakeDate)
        cy.get(el.INPUT_PRICE).type(Math.trunc(Math.random()*(100000 - 500)+500))
        cy.get(el.INPUT_MILEAGE).type(Math.trunc(Math.random()*(100000 - 100)+100))

        
        if(vehice ==='camper' || vehice === 'truck'){

                cy.get(el.SELECT_FUEL).select(Math.trunc(Math.random()*5)+1)
                cy.get(el.INPUT_PAYLOAD).type(Math.trunc(Math.random()*999)+1)
                cy.get(el.INPUT_TOTAL_WEIGHT).type(Math.trunc(Math.random()*(50000 - 100)+100))
                cy.get(el.SELECT_NUMBERSEATS).select(Math.trunc(Math.random()*9)+1)
                cy.get(el.INPUT_PLATE).type(Math.floor(1000000000 + Math.random() * 9000000000))

        }

        switch(vehice){
            case 'automobile':
                cy.get(el.SELECT_FUEL).select(Math.trunc(Math.random()*5)+1)
                cy.get(el.SELECT_NUMBERSEATS).select(Math.trunc(Math.random()*9)+1)
                cy.get(el.INPUT_PLATE).type(Math.floor(1000000000 + Math.random() * 9000000000))
                break;
            case 'motorcycle':
                cy.get(el.SELECT_NUMBERSEATS_MOTORCYCLE).select(Math.trunc(Math.random()*3)+1)
                cy.get(el.SELECT_MODEL).select(Math.trunc(Math.random()*4)+1)
                cy.get(el.INPUT_CYLINDERS).type(Math.trunc(Math.random()*1999)+1)
                break;
            case 'camper':
                cy.get(el.RADIO_HAND).click()
                break;
        }

        cy.get(el.SPAN_COUNTER_FILDS).find('span').should('have.text', '0')

        cy.get(el.BUTTON_NEXT).click()
    }


}

export default new VehiceData();