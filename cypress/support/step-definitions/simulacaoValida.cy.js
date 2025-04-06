import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home/'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurant Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Select Price Option'
import SendQuote from '../pages/Send Quote'



Given('que estou na página inicial do site',()=>{
    Home.visitPage()
})

And('escolho o tipo de veículo {string}', (vehice)=>{
    Home.selectVehicle(vehice)
})

When('preencho os campos com dados {string} do {string}',(fields,vehice)=>{
    VehiceData.validatePageAcess(vehice)
    VehiceData.fillVehicleData(vehice,fields)
})


And('clico em next para ir à aba de dados do segurado', ()=>{
    VehiceData.nextPageVehicle();
})


And('informo os dados {string} do segurado', (fields)=>{
    InsuranceData.fillDataInsurance(fields)
   
})

And('clico em next para ir à aba de dados do produto', ()=>{
    InsuranceData.nextPageInsurance();
})

And('preencho os dados {string} do produto {string}', (fields,vehice)=>{
    ProductData.fillDataProduct(fields,vehice)
})

And('clico em next para ir à aba de seleção de preço', ()=>{
    ProductData.nextPageProduct();
})

And('seleciono o preço do produto',()=>{
    PriceOption.choosePrice()
    
})

And('clico em next para prosseguir',()=>{
    PriceOption.nextPagePrice()
})

Then('envio a proposta para o e-mail do cliente',()=>{
    SendQuote.sendQuote()
    SendQuote.clickSendQuote()
})

And('valido o envio da proposta',()=>{
    SendQuote.validateSendProposal()
})