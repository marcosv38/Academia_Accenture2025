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

And('informo os dados {string} do segurado', (fields)=>{
    InsuranceData.fillDataInsurance(fields)
    InsuranceData.nextPageInsurance();
})

And('preencho os dados {string} do produto {string}', (fields,vehice)=>{
    ProductData.fillDataProduct(vehice,fields)
    ProductData.nextPageProduct();
})

Then('seleciono o preço do produto',()=>{
    PriceOption.choosePrice()
    
})

And('clico em next para prosseguir',()=>{
    PriceOption.nextPagePrice()
})

And('envio a proposta para o e-mail do cliente',()=>{
    SendQuote.sendQuote()
    SendQuote.clickSendQuote()
})

And('valido o envio da proposta',()=>{
    SendQuote.validateSendProposal()
})