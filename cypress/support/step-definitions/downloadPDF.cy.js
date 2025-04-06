import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import QuoteAnalysis from '../pages/AnalisePDF'

And('gero o PDF da proposta', () => {
    QuoteAnalysis.downloadQuote()
})

Then('valido o pdf da proposta', () => {
    QuoteAnalysis.analysisPDF()
})