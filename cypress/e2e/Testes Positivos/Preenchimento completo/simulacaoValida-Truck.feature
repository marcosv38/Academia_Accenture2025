#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para caminhão e envio por email
  Cenário: Geração válida de oferta de seguro para caminhão e envio por email
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'truck'
    Quando preencho os campos com dados 'completos' do 'truck'
    E clico em next para ir à aba de dados do segurado
    E informo os dados 'completos' do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'completos' do produto 'truck'
    E clico em next para ir à aba de seleção de preço
    E seleciono o preço do produto
    E clico em next para prosseguir
    Então insiro dados 'válidos' do usuário
    E clico em enviar a proposta para o cliente
    E valido o envio da proposta