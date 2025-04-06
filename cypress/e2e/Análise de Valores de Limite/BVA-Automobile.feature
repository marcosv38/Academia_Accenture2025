#utf-8
#language: pt

Funcionalidade: Validação dos campos obrigatórios com valores de limite (BVA)
  Cenário: Validar os campos obrigatórios com valores nos limites mínimo e máximo
    Dado que estou na página inicial do site
    E escolho o tipo de veículo 'automobile'
    Quando testo os campos 'obrigatórios' do veículo 'automobile'
    E clico em next para ir à aba de dados do segurado
    E testo os campos de informação do segurado
    E clico em next para ir à aba de dados do produto
    Então testo os campos de seguro

    