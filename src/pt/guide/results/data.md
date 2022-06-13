---
layout: TableLayout-2-25_75
title: Dados Exportados
tags:
  - Resultados
  - Painéis
  - Indicadores
  - Relatórios
  - Eventos
  - Exportar
---
# Dados Exportados

::: tip Dados pela ordem númerica ou pelo objetivo da ação
Nos dados exportados mostramos tanto o objetivo quanto a ordem numérica da ação. Por exemplo, data_unique.1 pode ser igual a data_unique.training quando a primeira etapa da campanha for do tipo treinamento.
:::

Ao exportar os dados da plataforma via relatórios ou integrando a API, os dados serão exportados de acordo com as definições a seguir. [API](../companies/api)

Nossa API está documentada em: [Documentação da API](http://apidocs.phishx.io)

::: details Quer um novo relatório pronto e customizado?
Converse com o time de Customer Success. [Customer Success](mailto:cs@phishx.io)
:::


## Sobre as ações

Cada nova etapa (ou ação) atingida pelo usuário é registrada.
Na plataforma não existe uma ordem única, as ações são de acordo com as definidas em sua campanha.
Por definições de governança e conformidade apenas quando o usuário de fato interagir com a campanha, clicando em botões, ou enviando informações, por exemplo é que ele muda de ação.

Para consultar o detalhamento das principais ações: [Ações](actions)


## Total vs. Único

| Tipo | Descrição |
| :--- | :--- |
| <b>Total</b> <br> <small>(data.X)</small> | Bom para saber quantas vezes uma pessoa fez aquela ação. Cálculo Total. Ideal para analisar listas de distribuição ou múltiplos acessos por contato. |
| <b>Único</b> <br> <small>(data_unique.X )</small> | Bom para saber se a pessoa fez ou não a ação. Cálculo Único. Ideal para somar o quantidade de pessoas. É o padrão da plataforma. |


## Ordem das Principais Ações

| Ações | Totais | Únicos |
| :--- | :--- | :--- |
| <b>Envio</b> | data.sent | data_unique.sent |
| <b>Abertura</b> <br> <small>(Tradicional)</small> | data.open_mail | data_unique.open_mail |
| <b>Clique</b> <br> <small>(Conversão ou Atividade Principal)</small> | data.1 | data_unique.1 |
| <b>Interação</b> <br> <small>(Abertura ou Clique)</small> | data.open_mail <br> data.1 | data_unique.open_mail <br> data_unique.1 |
| <b>Segunda Atividade</b> <br> <small>(Finalizou a Atividade Principal)</small> | data.2 | data_unique.2 |
| <b>Demais Atividades</b> <br> <small>(...)</small> | data.X | data_unique.X |
| <b>Terminou todas as Atividades</b> <br> <small>(e foi redirecionado para o site padrão)</small>| data.last | data_unique.last |


## Principais Métricas

| Métrica | Descrição |
| :--- | :--- |
| <b>Interações</b> <br> <small>(Aberturas / Envios)</small> | Métrica secundária para mensurar a taxa de interesse / leitura do público-alvo pelo tema. |
| <b>Conversões</b> <br> <small>(Cliques / Aberturas)</small> | Métrica principal para mensurar a taxa de conversão / clique do público-alvo pelo tema. |
| <b>Finalizações</b> <br> <small>(Finalizados / Etapa Principal)</small> | Métrica opcional para mensurar a taxa de finalizações da atividade principal pelo público-alvo. A atividade principal pode ser diferente a cada campanha. Exemplos: Terminar o Treinanmento, Responder o Questionário, Aceitar a Política, etc. |


## Principais Objetivos das Ações

| Objetivos | Totais | Únicos |
| :--- | :--- | :--- |
| <b>Treinamento</b> | data.training | data_unique.training |
| <b>Encerramento</b> | data.closure | data_unique.closure |
| <b>Simulação Web</b> | data.web_simulation | data_unique.web_simulation |
| <b>Questionário</b> | data.quiz | data_unique.quiz |
| <b>Documentação</b> | data.documentation | data_unique.documentation |
| <b>Política</b> | data.policy | data_unique.policy |
| <b>Redirecionamento</b> | data.redirection | data_unique.redirection |


## Principais Exemplos de Modelos de Campanhas

### Mensagem -> Abertura -> Redirecionamento

| Início | Fim | Totais | Únicos |
| :--- | :--- | :--- | :--- |
| <b>Envio</b> |  | data.sent | data_unique.sent |
| <b>Abertura</b> | Envio | data.interaction | data_unique.interaction |
| <b>Redirecionamento</b> |  | data.1 <br> data.redirection | data_unique.1 <br> data_unique.redirection |


### Mensagem -> Abertura -> Treinamento -> Opinião

| Início | Fim | Totais | Únicos |
| :--- | :--- | :--- | :--- |
| <b>Envio</b> |  | data.sent | data_unique.sent |
| <b>Abertura</b> | Envio | data.interaction | data_unique.interaction |
| <b>Treinamento</b> | Abertura | data.1 <br> data.training | data_unique.1 <br> data_unique.training |
| <b>Opinião</b> | Treinamento | data.2 <br> data.closure | data_unique.2 <br> data_unique.closure |
| <b>Última</b> | Opinião | data.last | data_unique.last |


### Mensagem -> Abertura -> Simulação Web -> Treinamento -> Opinião

| Início | Fim | Totais | Únicos |
| :--- | :--- | :--- | :--- |
| <b>Envio</b> |  | data.sent | data_unique.sent |
| <b>Abertura</b> | Envio | data.interaction | data_unique.interaction |
| <b>Simulação Web</b> | Abertura | data.1 <br> data.web_simulation | data_unique.1 <br> data_unique.web_simulation |
| <b>Treinamento</b> | Simulação Web | data.2 <br> data.training | data_unique.2 <br> data_unique.training |
| <b>Opinião</b> | Treinamento | data.3 <br> data.closure | data_unique.3 <br> data_unique.closure |
| <b>Última</b> | Opinião | data.last | data_unique.last |

