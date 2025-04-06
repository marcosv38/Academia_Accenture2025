#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para camper e envio por email
  Cenário: Geração de oferta de seguro utilizando os dados obrigatórios para
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'camper'
    Quando preencho os campos com dados 'obrigatórios' do 'camper'
    E clico em next para ir à aba de dados do segurado
    E informo os dados 'obrigatórios' do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'obrigatórios' do produto 'camper'
    E clico em next para ir à aba de seleção de preço
    E seleciono o preço do produto
    E clico em next para prosseguir
    Então insiro dados 'válidos' do usuário
    E clico em enviar a proposta para o cliente
    E valido o envio da proposta