import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import SendQuote from '../pages/SendQuote'

And('o sistema deve impedir o envio e apresentar uma mensagem de alerta', () => {
    SendQuote.validateErrorMessage()
})

