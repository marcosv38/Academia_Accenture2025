import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import QuoteAnalysis from '../pages/Analise PDF'

And('gero o PDF da proposta',()=>{
    QuoteAnalysis.downloadQuote()
})

Then('valido o pdf da proposta',()=>{
    QuoteAnalysis.analysisPDF()
})