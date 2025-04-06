#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para automóvel
  Cenário: Geração válida de oferta de seguro para automóvel
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'automobile'
    Quando preencho os dados 'obrigatórios' do veículo 'automobile'
    E informo os dados 'obrigatórios' do segurado
    E preencho os dados 'obrigatórios' do produto 'automobile'
    E seleciono o preço do produto
    Então abro o pdf da proposta