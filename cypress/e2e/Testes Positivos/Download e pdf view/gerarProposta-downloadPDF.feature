#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para automóvel em PDF e realizar o download
  Cenário: Geração válida e download de oferta de seguro para automóvel em pdf
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'automobile'
    Quando preencho os campos com dados 'obrigatórios' do 'automobile'
    E clico em next para ir à aba de dados do segurado
    E informo os dados 'obrigatórios' do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'obrigatórios' do produto 'automobile'
    E clico em next para ir à aba de seleção de preço
    E seleciono o preço do produto
    E gero o PDF da proposta
    Então valido o pdf da proposta