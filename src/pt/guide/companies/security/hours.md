---
title: Controle de acesso por horário
tags:
  - Empresas
  - Configurações
---

# Controle de acesso por horário

::: tip Vários fusos horários
Cada país ou região possuem diversos fusos horários.<br>
Recomendamos habilitar as horas globais baseadas na menor e maior hora dentro de sua região para suportar todos os seus usuários.<br>
Se precisar de apoio adicional converse com o [Customer Success](mailto:cs@phishx.io).
:::

Gerenciar a disponibilidade de acesso aos conteúdos e portais de conhecimento da PhishX baseado no horário de acesso.

1. Em **Segurança** -> **Controle de Acesso por Horário**.

   Em **Habilitado** definir se o módulo estará habilitado.

   Em **Global** definir se apenas a configuração global estará ativa.

   Em **Dias** definir os dias específicos.

   Em **Horas** definir as horas específicas. As horas globais são baseadas no horário global **UTC**.

   ![Controle de Acesso por Horário](https://cdn.phishx.io/phishx-docs/images/phishx_companies_hours_01.webp)

2. Opcionalmente adicionar configurações específicas por fuso horário.

   Adicionar um novo. Clicar **+**.

   Em **Fuso Horário** definir o novo fuso horário.

   Em **Dias** definir os dias específicos.

   Em **Horas** definir as horas específicas. As horas do fuso horário são baseadas no horário do **fuso horário**.

   ::: details Controle por fuso horário
   Caso a opção de habilitado global estiver desmarcada, se houver uma política específica para o fuso horário, ela sobrescreve a política global.<br>
   O fuso horário poderá ser identificado pelo acesso público do usuário (IP de origem), quando disponível.
   :::
