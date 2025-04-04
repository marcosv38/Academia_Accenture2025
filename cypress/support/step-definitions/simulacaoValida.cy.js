import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurance Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Enter Price Option'
import SendQuote from '../pages/Send Quote'
import QuoteAnalysis from '../pages/Analise PDF'


Given('que estou na página inicial do site',()=>{
    Home.visitPage()
})

And('escolho o tipo de automóvel {string}', (vehice)=>{
    Home.selectVehicle(vehice)
})

When('insiro os dados do veiculo {string}',(vehice)=>{
    VehiceData.validatePageAcess(vehice)
    VehiceData.fillVehicleData(vehice)
})

And('informo os dados do seguro', ()=>{
    InsuranceData.fillDataInsurance()
})

And('informo os dados do produto {string}', (vehice)=>{
    ProductData.fillDataProduct(vehice)
})

Then('escolho o preço do produto',()=>{
    PriceOption.choosePrice()
})

And('valido o pdf',()=>{
    QuoteAnalysis.downloadQuote()
    QuoteAnalysis.analysisPDF()
})

And('envio a proposta',()=>{
    SendQuote.sendQuote()
})


And('valido o envio da proposta',()=>{
    SendQuote.validateSendProposal()
})