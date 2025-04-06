import {Then} from 'cypress-cucumber-preprocessor/steps'
import PriceOption from '../pages/SelectPriceOption'

Then('clico para abrir o pdf da proposta',()=>{
    PriceOption.viewPDF()
})