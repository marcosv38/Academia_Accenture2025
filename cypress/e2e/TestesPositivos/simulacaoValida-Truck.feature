#utf-8
#language: pt

Funcionalidade: Gerar oferta de seguro para caminhão
  Cenário: Geração válida de oferta de seguro para caminhão
    Dado que estou na página inicial do site
    E clico no tipo de veículo 'truck'
    Quando preencho os dados do veículo 'truck'
    E informo os dados do seguro
    E preencho os dados do produto 'truck'
    E seleciono o preço do produto
    E gero o PDF da proposta
    E valido o pdf da proposta
    E envio a proposta para o e-mail do cliente
    Então valido o envio da proposta