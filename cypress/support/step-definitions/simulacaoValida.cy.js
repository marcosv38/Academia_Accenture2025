import {Given, When, And, Then, Before, After, But} from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/Home'
import VehiceData from '../pages/Enter Vehicle Data'

Given('que estou na página inicial do site',()=>{
    Home.visitarPagina()
})

And('escolho o tipo de automóvel {string}', (veiculo)=>{
    Home.selecionarVeiculo(veiculo)
})

When('insiro os dados do veiculo {string}',(veiculo)=>{
    VehiceData.inserirDadosVeiculo(veiculo)
})

And('informo os dados do seguro', ()=>{
    
})