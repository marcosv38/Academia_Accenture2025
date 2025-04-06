#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para motocicleta
  Cenário: Geração válida de oferta de seguro para motocicleta
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'motorcycle'
    Quando preencho os dados 'completos' do veículo 'motorcycle'
    E informo os dados 'completos' do segurado
    E preencho os dados 'completos' do produto 'motorcycle'
    E seleciono o preço do produto
    E clico em next para prosseguir
    E envio a proposta para o e-mail do cliente
    Então valido o envio da proposta