#utf-8
#language: pt

Funcionalidade: Testar todos campos obrigatórios
  Cenário: Todos os campos obrigatórios devem ser testados com valores de limite
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'automobile'
    Quando testo os campos 'obrigatórios' do veículo 'automobile'
    E preencho os dados 'obrigatórios' do veículo 'automobile'
    E testo os campos 'obrigatórios' do segurado
    E informo os dados 'obrigatórios' do segurado
    Então testo os campos 'obrigatórios' do produto 'automobile'

    