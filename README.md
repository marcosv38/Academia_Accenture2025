# Desafio Técnico Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte do **Desafio Técnico da Academia Accenture 2025**. O foco é a automação de testes web utilizando o **Cypress** com linguagem **JavaScript**, seguindo boas práticas como o padrão **Page Objects** e o uso de **BDD com Gherkin**.

---

## 🔗 Link do portal testado

- http://sampleapp.tricentis.com/101/app.php

---

## 🧠 Etapas do desenvolvimento

1. Acesso ao portal da Tricentis;
2. Análise da estrutura do site;
3. Criação da estrutura de automação intitulada **"Academia_Accenture 2025"**;
4. Desenvolvimento da feature de teste com **cenário positivo** em Gherkin;
5. Implementação da automação cobrindo o fluxo completo de cotação.

---

## ✅ Funcionalidades testadas

- **Geração e envio de orçamentos** para todos os tipos de veículos disponíveis no sistema (`Automobile`, `Truck`, `Motorcycle` e `Camper`);
- **Download do orçamento em PDF**, contendo todas as informações fornecidas pelo cliente durante a simulação;
- **Validação dos campos obrigatórios**, garantindo que todos os dados essenciais sejam informados corretamente antes do envio;
- **Requisição e verificação de dados críticos** necessários para a geração da proposta, respeitando as regras de negócio estabelecidas.


---

## ✅ Estrutura de Testes

Os testes foram organizados em três grandes grupos, contemplando diferentes abordagens de validação para o sistema de cotação de seguros:

### 🔍 Análise de Valores de Limite
- **BVA-Automobile.feature**  
  Aplica a técnica de **Boundary Value Analysis (BVA)**, verificando limites mínimos e máximos permitidos para campos numéricos (ex: cilindrada, peso, valor do veículo, etc.).

---

### ❌ Testes Negativos
Garantem que o sistema se comporte corretamente diante de entradas inválidas ou inconsistentes.

- **credenciaisInvalidas.feature**: Testa o envio da proposta com dados inválidos.
- **dadosInvalidos.feature**: Valida erros ao preencher dados incorretos nas etapas do formulário.
- **planoInvalido.feature**: Verifica comportamento ao tentar enviar proposta sem selecionar uma opção de plano válida.

---

### ✅ Testes Positivos

#### 📄 Download e Visualização de PDF
- **gerarProposta-downloadPDF.feature**: Gera proposta, realiza o download do PDF com os dados da simulação e realiza a análise de dados utilizando o pdf-parse.
- **gerarProposta-viewPDF.feature**: Visualiza o PDF gerado diretamente pelo sistema.

#### 📝 Preenchimento Obrigatório
Testes focados apenas no preenchimento dos campos obrigatórios de cada tipo de seguro.

- **dadosObrigatorios-Automobile.feature**
- **dadosObrigatorios-Camper.feature**
- **dadosObrigatorios-Motorcycle.feature**
- **dadosObrigatorios-Truck.feature**

#### 🧾 Simulações Completas
Fluxos completos de cotação para cada tipo de veículo, preenchendo todos os dados de forma válida até o envio final da proposta.

- **simulacaoValida-Automobile.feature**
- **simulacaoValida-Camper.feature**
- **simulacaoValida-Motorcycle.feature**
- **simulacaoValida-Truck.feature**

---

Todos os testes foram desenvolvidos seguindo o padrão **Page Objects**, com os dados sensíveis armazenados no `cypress.env.json`. A escrita das features segue o formato **Gherkin**, promovendo clareza e legibilidade para todos os stakeholders.

---

## 📌 Requisitos atendidos

- ✅ Uso do padrão **Page Objects**;
- ✅ Escrita das features no formato **Gherkin**;
- ✅ Validações implementadas conforme exigido;
- ✅ Uso de variáveis sensíveis via `Cypress.env`;
- ✅ Testes negativos foram implementados

---

## 🔧 Tecnologias utilizadas

- **Cypress**
- **JavaScript**
- **VS Code**

---

## 📁 Organização do projeto

- `cypress/e2e` - Arquivos de testes (features)
- `cypress/support/pageObjects` - Page Objects
- `cypress.env.json` - Variáveis sensíveis

---

## 🙏 Agradecimentos

Agradeço à equipe da Academia Accenture pela oportunidade e pela experiência enriquecedora durante o desafio!

---

