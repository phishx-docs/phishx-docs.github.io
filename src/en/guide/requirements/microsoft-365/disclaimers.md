---
title: Avisos Legais
tags:
  - Requisitos
  - Microsoft
  - Office
  - 365
---

# Avisos Legais

::: tip Avisos Legais são opcionais
Toda mensagem externa a organização pode ser opcionalmente alterada para informar a pessoa ter o devido cuidado ao ler e acessar o conteúdo. A inclusão ou remoção desse aviso é opcional e pode influenciar os resultados de suas campanhas.
:::

## Resumo

1. Editar a sua regra de transporte padrão em **Exchange admin center** -> **Mail flow** -> **Rules**. Adicionar nossa lista atual de Domínios: [Domínios](../domains.html#separado-por-linhas)

## Configurações

1. Acessar o **Exchange admin center**.

   Acessar **Mail flow** em **Rules**.

   OBS: Temos um script exemplo que pode ajudar. [Script](https://cdn.phishx.io/test/messagewarning.txt).

   [Disclaimers](https://admin.exchange.microsoft.com/#/transportrules)

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_001.png)

2. **Editar sua regra padrão** ou **criar uma nova**

   Clicar em **Add a rule** e **Create a new rule**.

   [Referência](https://learn.microsoft.com/pt-br/exchange/security-and-compliance/mail-flow-rules/disclaimers-signatures-footers-or-headers#use-the-eac-to-add-a-disclaimer-or-other-email-header-or-footer)

3. Configurar **Set rule conditions**.

   Em **Name**, adicionar o nome **PhishX**.

   Em **Apply this rule if**, escolher **The sender** e **domain is**. Clicar em **Edit condition**.

   Adicionar nossa lista atual de domínios: [Domínios](../domains.html#separado-por-linhas)

   **Observação**: É necessário entrar um domínio por vez no formato **phishx.io**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_005.png)

   Clicar em **+** e adicionar uma nova condição. Escolher **The sender**, **is external/internal** e **Outside the organization**.

   Em **Do the following**, escolher **Prepend the subject of the message with** e **specified prefix**. Clicar em **Edit action**.

   Adicionar um **espaço**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_006.png)

4. Configurar **Set rule settings**.

   Em **Rule mode**, selecionar **Enforce** e **Stop processing more rules**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_007.png)

5. Revisar em **Review and finish**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_008.png)

   Clicar em **Finish**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_009.png)

   Clicar em **Done**.

6. Editar a regra e habilitar em **Enable or disable rule**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_010.png)

7. Mover a regra para **Prioridade 0**.

   ![Disclaimers](https://cdn.phishx.io/phishx-docs/images/microsoft_disclaimers_001.png)
