#utf-8
#language: pt

Funcionalidade: Bloqueio de campos no envio da proposta de seguro com dados inválidos
  Cenário: O sistema impede a elaboração de porposta com dados inválidos
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'automobile'
    Quando preencho os campos com dados 'obrigatórios' do 'automobile'
    E clico em next para ir à aba de dados do segurado
    E informo os dados inválidos do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'inválidos' do produto 'automobile'
    E clico em next para ir à aba de seleção de preço
    Então price options não deve apresentar as opções de preço
    E clico na aba Send Quote para prosseguir sem escolher o plano
    E a aba de envio não deve exibir os campos de preenchimento