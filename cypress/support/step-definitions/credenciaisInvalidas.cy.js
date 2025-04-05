import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import SendQuote from '../pages/Send Quote'
import QuoteAnalysis from '../pages/Analise PDF'

And('informo dados {string} do usuário', (fields)=>{
    SendQuote.nextSendQuote()
    SendQuote.sendQuote(fields)
})

Then('tento enviar a proposta para o e-mail do cliente', () => {
    SendQuote.clickSendQuote()
})

And('o sistema deve apresentar uma mensagem de erro', () => {

    SendQuote.validateErrorMessage()

})
