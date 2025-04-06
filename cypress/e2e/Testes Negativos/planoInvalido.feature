#utf-8
#language: pt

Funcionalidade: Controle de acesso à aba de envio de proposta
  Cenário: A aba de envio não deve exibir campos ao avançar sem selecionar um plano
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'automobile'
    Quando preencho os campos com dados 'obrigatórios' do 'automobile'
    E clico em next para ir à aba de dados do segurado
    E informo os dados 'obrigatórios' do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'obrigatórios' do produto 'automobile'
    E clico em next para ir à aba de seleção de preço
    Então clico na aba Send Quote para prosseguir sem escolher o plano
    E a aba de envio não deve exibir os campos de preenchimento