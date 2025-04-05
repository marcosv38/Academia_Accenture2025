import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurant Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Select Price Option'
import SendQuote from '../pages/Send Quote'
import QuoteAnalysis from '../pages/Analise PDF'


Given('que estou na página inicial do site',()=>{
    Home.visitPage()
})

And('clico no tipo de veículo {string}', (vehice)=>{
    Home.selectVehicle(vehice)
})

When('preencho os dados do veículo {string}',(vehice)=>{
    VehiceData.validatePageAcess(vehice)
    VehiceData.fillVehicleData(vehice)
})

And('informo os dados do seguro', ()=>{
    InsuranceData.fillDataInsurance()
})

And('preencho os dados do produto {string}', (vehice)=>{
    ProductData.fillDataProduct(vehice)
})

Then('seleciono o preço do produto',()=>{
    PriceOption.choosePrice()
})

And('gero o PDF da proposta',()=>{
    QuoteAnalysis.downloadQuote()
})

And('valido o pdf da proposta',()=>{
    QuoteAnalysis.analysisPDF()
})

And('envio a proposta para o e-mail do cliente',()=>{
    SendQuote.sendQuote()
})

And('valido o envio da proposta',()=>{
    SendQuote.validateSendProposal()
})