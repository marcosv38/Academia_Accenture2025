#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para caminhão
  Cenário: Geração válida de oferta de seguro para caminhão
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'camper'
    Quando preencho os dados 'obrigatórios' do veículo 'camper'
    E informo os dados 'obrigatórios' do segurado
    E preencho os dados 'obrigatórios' do produto 'camper'
    E seleciono o preço do produto
    E clico em next para prosseguir
    E envio a proposta para o e-mail do cliente
    Então valido o envio da proposta