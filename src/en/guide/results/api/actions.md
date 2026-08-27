---
layout: TableLayout-2-25_75
title: Exemplo e Ações
tags:
  - Resultados
  - Painéis
  - Indicadores
  - Relatórios
  - Eventos
  - Exportar
  - API
---

# Exemplo e Ações

## Exemplo de Reposta (report_simple_1)

O conjunto de campos pode mudar de acordo com os parâmetros da chamada a API.

| Campo                      | Descrição                      |
|:---------------------------|:-------------------------------|
| action                     | Ação traduzida.                |
| action_group               | Ação fixa.                     |
| campaign_category          | Categoria da Campanha.         |
| campaign_date              | Dia da Campanha.               |
| campaign_date_year         | Ano da Campanha.               |
| campaign_date_year_month   | Ano e Mês da Campanha.         |
| campaign_date_year_quarter | Ano e Trimestre da Campanha.   |
| campaign_id                | ID da Campanha.                |
| campaign_objective         | Objetivo da Campanha.          |
| date (America/Sao_Paulo)   | Data com fuso horário da ação. |
| domain                     | Domínio do contato.            |
| email                      | E-mail do contato.             |
| qty                        | Quantidade de ações.           |
| subdomain                  | Subdomínio da organização.     |
| user                       | Demais atributos do contato.   |

```json
[
  {
    "action": "mensagem aberta",
    "action_group": "message_opened",
    "campaign_category": "official",
    "campaign_date": "2025-06-02",
    "campaign_date_year": "2025",
    "campaign_date_year_month": "2025-06",
    "campaign_date_year_quarter": "2025-Q2",
    "campaign_id": 7425,
    "campaign_name": "Teste Google",
    "campaign_objective": "simulation",
    "date (America/Sao_Paulo)": "2025-06-04 09:27:03",
    "domain": "vieira.net",
    "email": "pedro@vieira.net",
    "qty": 1,
    "subdomain": "phishx",
    "user": {
      "domain": "vieira.net",
      "subdomain": "phishx"
    }
  },
]
```

## Ações (action_group)

As ações não realizadas são virtuais e temporárias, até o presente momento não foram realizadas.
Algumas ações podem ser opcionais ou serem atribuídas ao mesmo momento. Exemplo: Se não houve a abertura antes do clique, tanto o clique quanto a abertura são representados no mesmo momento.

| Ação                        | Descrição                  |
|:----------------------------|:---------------------------|
| message_delivered           | Mensagem entregue.         |
| message_opened              | Mensagem aberta.           |
| message_clicked             | Mensagem clicada.          |
| message_websimulation_start | Página de dados acessada.  |
| message_websimulation       | Dados capturados.          |
| message_training_start      | Treinamento iniciado.      |
| message_training            | Treinamento encerrado.     |
| message_reported            | Mensagem reportada.        |
| message_replied             | Mensagem respondida.       |
| no_message_opened           | Mensagem não aberta.       |
| no_message_clicked          | Mensagem não clicada.      |
| no_message_websimulation    | Dados não capturados.      |
| no_message_training         | Treinamento não encerrado. |
| no_message_reported         | Mensagem não reportada.    |
| no_message_replied          | Mensagem não respondida.   |
