import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurant Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Select Price Option'
import SendQuote from '../pages/Send Quote'



Given('que estou na página inicial do site',()=>{
    Home.visitPage()
})

And('clico no tipo de veículo {string}', (vehice)=>{
    Home.selectVehicle(vehice)
})

When('preencho os dados {string} do veículo {string}',(fields,vehice)=>{
    VehiceData.validatePageAcess(vehice)
    VehiceData.fillVehicleData(vehice,fields)
    VehiceData.nextPageVehicle();
})

And('informo os dados inválidos do segurado', ()=>{
    InsuranceData.fillInvalidDataInsurance()
    InsuranceData.nextPageInsurance();
})

And('preencho os dados {string} do produto {string}', (fields,vehice)=>{
    cy.log(fields)
    ProductData.fillDataProduct(fields,vehice)
    ProductData.nextPageProduct();
})

Then('price options não deve apresentar as opções de preço',()=>{
    PriceOption.priceOptionsError();
    PriceOption.nextPagePrice();
})

And('a aba de envio não deve apresentar os campos de envio',()=>{
    SendQuote.sendQuoteError()
})
