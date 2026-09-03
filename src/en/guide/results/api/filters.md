---
layout: TableLayout-2-25_75
title: Filtros na API
tags:
  - Resultados
  - Painéis
  - Indicadores
  - Relatórios
  - Eventos
  - Exportar
  - API
---

# Filtros na API

::: tip Agende uma conversa com nossos especialistas
Para acelerar a sua integração interna com a PhishX API, agende uma conversa com nossos especialistas para enteder as suas necessidades e direcionar os melhores relatórios e ações.
:::

Como filtrar os resultados na API.

| Filtro    | Descrição                                                                                            |
| :-------- | :--------------------------------------------------------------------------------------------------- |
| report    | Identificador do relatório. Padrão é o **Relatório Simplificado** (**report_simple_1**).             |
| date      | Filtro de data das campanhas. Padrão é **1 mês completo** (**C30**).                                 |
| objective | Objetivo da campanha. Pode ser **Simulação** (**simulation**) ou **Comunicação** (**communication**) |
| category  | Categoria da campanha. Pode ser **Oficial** (**official**) ou **Validação** (**validation**)         |

## Relatório (report)

Outros relatórios podem ser solicitados via API.

| Identificador                    | Descrição                                                             |
| :------------------------------- | :-------------------------------------------------------------------- |
| report_simple_1                  | Relatório simplificado de ações por campanha e pessoa.                |
| report_simple_1_pre              | Relatório pré-processado simplificado de ações por campanha e pessoa. |
| report_campaigns                 | Relatório com todas as campanhas.                                     |
| report_details_1                 | Relatório detalhado de todos os acessos.                              |
| report_all_stats                 | Relatório estatístico com todas as ações de uma pessoa e campanha.    |
| report_multitenancy_isp_complete | Relatório detalhados com filtrados de todos os acessos e provedores.  |

## Data (date)

| Identificador      | Descrição                                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------- |
| 20240101\|20241231 | Dados de campanhas entre 01/01/2024 até 31/12/2024. Pode ser utilizado com qualquer data no formato YYYYMMDD\|YYYYMMDD |
| A0                 | Mês atual                                                                                                              |
| 30                 | 1 mês                                                                                                                  |
| L30                | Último mês                                                                                                             |
| C30                | 1 mês completo                                                                                                         |
| 60                 | 2 meses                                                                                                                |
| C60                | 2 meses completos                                                                                                      |
| A90                | Trimestre atual                                                                                                        |
| 90                 | 3 meses                                                                                                                |
| C90                | 3 meses completos                                                                                                      |
| L90                | Último trimestre                                                                                                       |
| 120                | 4 meses                                                                                                                |
| C120               | 4 meses completos                                                                                                      |
| A180               | Semestre atual                                                                                                         |
| 180                | 6 meses                                                                                                                |
| C180               | 6 meses completos                                                                                                      |
| L180               | Último semestre                                                                                                        |
| A365               | Ano atual                                                                                                              |
| 365                | 1 ano                                                                                                                  |
| C365               | 1 ano completo                                                                                                         |
| L365               | Último ano                                                                                                             |
| 730                | 2 anos                                                                                                                 |
| C730               | 2 anos completos                                                                                                       |
| 1095               | 3 anos                                                                                                                 |
| C1095              | 3 anos completos                                                                                                       |
| 1825               | 4 anos                                                                                                                 |
| C1825              | 4 anos completos                                                                                                       |
| 2190               | 5 anos                                                                                                                 |
| C2190              | 5 anos completos                                                                                                       |
