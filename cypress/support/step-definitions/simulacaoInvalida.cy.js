import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurant Data'
import ProductData from '../pages/Enter Product Data'
import PriceOption from '../pages/Select Price Option'
import SendQuote from '../pages/Send Quote'


And('informo os dados inválidos do segurado', ()=>{
    InsuranceData.fillInvalidDataInsurance()
})

Then('price options não deve apresentar as opções de preço',()=>{
    PriceOption.priceOptionsError();
})

And('a aba de envio não deve exibir os campos de preenchimento',()=>{
    SendQuote.sendQuoteError()
})

Then('clico na aba Send Quote para prosseguir sem escolher o plano',()=>{
    PriceOption.clickPagePrice()
})
