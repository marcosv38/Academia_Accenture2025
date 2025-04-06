import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import VehiceData from '../pages/EnterVehicleData'
import InsuranceData from '../pages/EnterInsurantData'
import ProductData from '../pages/EnterProductData'

When('testo os campos {string} do veículo {string}', (fields, Vehicle) => {
    VehiceData.vehicleDataValidate(Vehicle, fields)
})

And('testo os campos de informação do segurado', (fields) => {
    InsuranceData.insuranceDataValidate()
})

Then('testo os campos de seguro', () => {
    ProductData.ProductDataValidate()
})
