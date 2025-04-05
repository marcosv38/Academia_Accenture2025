#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para automóvel
  Cenário: Geração válida de oferta de seguro para automóvel
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'automobile'
    Quando preencho os dados 'completos' do veículo 'automobile'
    E informo os dados 'completos' do segurado
    E preencho os dados 'completos' do produto 'automobile'
    E seleciono o preço do produto
    E gero o PDF da proposta
    E valido o pdf da proposta
    E envio a proposta para o e-mail do cliente
    Então valido o envio da proposta