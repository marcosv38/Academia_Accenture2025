import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import PriceOption from '../pages/Select Price Option'

Then('abro o pdf da proposta',()=>{
    PriceOption.viewPDF()
})