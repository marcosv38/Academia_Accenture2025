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
    E informo dados 'inválidos' do usuário
    Então tento enviar a proposta para o e-mail do cliente
    E o sistema deve apresentar uma mensagem de erro