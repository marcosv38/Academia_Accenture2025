import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import SendQuote from '../pages/SendQuote'

And('insiro dados {string} do usuário', (fields) => {
    SendQuote.sendQuote(fields)
})

Then('tento enviar a proposta para o e-mail do cliente', () => {
    SendQuote.clickSendQuote()
})

And('o sistema deve impedir o envio e apresentar uma mensagem de alerta', () => {
    SendQuote.validateErrorMessage()
})
