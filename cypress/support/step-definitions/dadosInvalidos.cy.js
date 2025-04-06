import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import InsuranceData from '../pages/EnterInsurantData'
import PriceOption from '../pages/SelectPriceOption'
import SendQuote from '../pages/SendQuote'


Then('price options não deve apresentar as opções de preço', () => {
    PriceOption.priceOptionsError();
})

And('clico na aba Send Quote para prosseguir sem escolher o plano', () => {
    PriceOption.clickPagePrice()
})

And('a aba de envio não deve exibir os campos de preenchimento', () => {
    SendQuote.sendQuoteError()
})


