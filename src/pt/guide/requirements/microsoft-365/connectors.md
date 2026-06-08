---
title: Conectores
tags:
  - Requisitos
  - Microsoft
  - Office
  - 365
---

# Conectores

::: tip Envios Diretos
O envio via Conectores é opcional para quando não for possível configurar as camadas tradicionais de segurança com nossos IPs e Domínios em suas respectivas listas permissivas. Algumas funcionalidades podem não funcionar corretamente devido a limitações do envio direto via Conectores.
:::

## Resumo

1. Crie um Novo Conector em **Fluxo de E-mails** -> **Conectores**. Adicionar nossa lista atual de Domínios: [Domínios](../domains.html#separado-por-linhas)

## Configurações

1. Acessar o novo **Microsoft 365 Exchange admin center**.

   [Exchange Admin Center](https://admin.exchange.microsoft.com/#/homepage)

2. Ir para **Conectores** no menu: **Fluxo de E-mails** -> **Conectores**.

   [Referência](https://docs.microsoft.com/pt-br/exchange/mail-flow-best-practices/use-connectors-to-configure-mail-flow/use-connectors-to-configure-mail-flow)

   Clicar **Adicionar um conector**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_001.png)

3. Em **Novo Conector** -> **Conexão de** selecionar **Organização Parceira**.

   Clicar **Próximo**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_002.png)

4. Em **Nome do Conector** -> **Nome** inserir "PhishX" e selecionar **Habilitar**.

   Clicar **Próximo**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_003.png)

5. Em **Autenticando e-mail enviado** selecionar **Verificar se o domínio de envio corresponde a um dos seguintes domínios**. Adicionar nossa lista de Domínios: [Domínios](../domains.html#separado-por-linhas).

   Clicar **Próximo**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_004.png)

6. Em **Restrições de Segurança** selecionar **Rejeitar mensagens de e-mail se não forem enviadas por TLS**.

   Clicar **Próximo**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_005.png)

7. In **Resumo do Conector**.

   Clicar **Criar conector**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_006.png)

8. Em **Conector criado**.

   Clicar **Pronto**.

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_007.png)

9. Acessar o novo **Microsoft Defender**.

   Ir para **Email & Collaboration** -> **Policy & Rules**.

   Ir para **Threat policies**.

   Ir para **Rules** -> **Enhanced Filtering**.

   [Microsoft Defender](https://security.microsoft.com/skiplisting)

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_101.png)

   [Referência](https://learn.microsoft.com/en-us/Exchange/mail-flow-best-practices/use-connectors-to-configure-mail-flow/enhanced-filtering-for-connectors)

   Em **IP addresses to skip**, selecionar **Automatically detect and skip the last IP address**.

   Em **Apply to these users**, selecionar **Apply to entire organization**.

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_exchange_connectors_102.png)

   Solicitar a configuração e testes iniciais para o time de Customer Success.
