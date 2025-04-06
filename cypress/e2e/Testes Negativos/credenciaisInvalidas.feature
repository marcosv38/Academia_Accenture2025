#utf-8
#language: pt

Funcionalidade: Validação de campos no envio da proposta de seguro
  Cenário: Exibição de erro ao tentar enviar proposta com dados inválidos do usuário
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'automobile'
    Quando preencho os campos com dados 'obrigatórios' do 'automobile'
    E clico em next para ir à aba de dados do segurado
    E informo os dados 'obrigatórios' do segurado
    E clico em next para ir à aba de dados do produto
    E preencho os dados 'obrigatórios' do produto 'automobile'
    E clico em next para ir à aba de seleção de preço
    E seleciono o preço do produto
    E clico em next para prosseguir
    E insiro dados 'inválidos' do usuário
    Então tento enviar a proposta para o e-mail do cliente
    E o sistema deve impedir o envio e apresentar uma mensagem de alerta