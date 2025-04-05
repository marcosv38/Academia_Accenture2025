#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para camper
  Cenário: Geração válida de oferta de seguro para camper
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'camper'
    Quando preencho os dados do veículo 'camper'
    E informo os dados do seguro
    E preencho os dados do produto 'camper'
    E seleciono o preço do produto
    E gero o PDF da proposta
    E valido o pdf da proposta
    E envio a proposta para o e-mail do cliente
    Então valido o envio da proposta