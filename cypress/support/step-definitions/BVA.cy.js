import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import VehiceData from '../pages/Enter Vehicle Data'
import InsuranceData from '../pages/Enter Insurant Data'
import ProductData from '../pages/Enter Product Data'



When('testo os campos {string} do veículo {string}', (fields,Vehicle)=>{
    VehiceData.vehicleDataValidate(Vehicle,fields)
})

And('testo os campos de informação do segurado', (fields)=>{
     InsuranceData.insuranceDataValidate()
})


Then('testo os campos de seguro', ()=>{
    ProductData.ProductDataValidate()
})
