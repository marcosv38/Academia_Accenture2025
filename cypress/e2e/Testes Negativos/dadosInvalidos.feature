#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para automóvel
  Cenário: Geração válida de oferta de seguro para automóvel
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'automobile'
    Quando preencho os dados 'obrigatórios' do veículo 'automobile'
    E informo os dados inválidos do segurado
    E preencho os dados 'inválidos' do produto 'automobile'
    Então price options não deve apresentar as opções de preço
    E a aba de envio não deve apresentar os campos de envio