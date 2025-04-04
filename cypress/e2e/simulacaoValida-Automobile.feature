#utf-8
#language: pt

Funcionalidade: Simulação de oferta de seguro de veículo
    Cenário: Simulação válida de oferta de seguro de veículo
        Dado que estou na página inicial do site
        E escolho o tipo de automóvel 'automobile'
        Quando insiro os dados do veiculo 'automobile'
        E informo os dados do seguro
        E informo os dados do produto
        Então escolho o preço do produto
        E envio a proposta
        E valido o envio da proposta