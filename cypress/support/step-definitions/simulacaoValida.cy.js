import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurance Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Enter Price Option'
import SendQuote from '../pages/Send Quote'
import QuoteAnalysis from '../pages/Analise PDF'

Given('que estou na página inicial do site',()=>{
    Home.visitarPagina()
})

And('escolho o tipo de automóvel {string}', (veiculo)=>{
    Home.selecionarVeiculo(veiculo)
})

When('insiro os dados do veiculo {string}',(veiculo)=>{
    VehiceData.inserirDadosVeiculo(veiculo)
})

And('informo os dados do seguro', ()=>{
    InsuranceData.inserirDadosInsurance()
})

And('informo os dados do produto', ()=>{
    ProductData.inserirDadosProduct()
})

Then('escolho o preço do produto',()=>{
    PriceOption.escolherPrice()
})

And('valido o pdf',()=>{
    QuoteAnalysis.downloadQuote()
})

And('envio a proposta',()=>{
    SendQuote.sendQuote()
})


And('valido o envio da proposta',()=>{
    SendQuote.validarEnvioProposta()
})