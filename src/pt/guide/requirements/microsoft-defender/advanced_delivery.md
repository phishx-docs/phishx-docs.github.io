---
title: Política de entrega avançada
tags:
  - Requisitos
  - Microsoft
  - Office
  - Defender
---

# Política de entrega avançada

::: tip Política de entrega avançada
Para manter sua organização segura por padrão, o Exchange Online Protection (EOP) não permite listas seguras ou desvio de filtragem para mensagens suspeitas ou identificadas como malware ou phishing. Porém, existem cenários específicos que exigem a entrega de mensagens não filtradas, como simulações de phishing de terceiros. A política de entrega avançada no EOP evita que mensagens de entrada nesses cenários específicos sejam filtradas.
:::

## Resumo

1. Editar a **Política de entrega avançada** em **Políticas e regras** -> **Políticas de ameaças** -> **Entrega avançada**. Adicionar nossa lista atual de domínios: [Domínios](../domains.html#separado-por-linhas) e IPs [IPs](../ips.html#separado-por-linhas)

## Configurações

1. Acessar o atual **Microsoft Defender**.

   Acessar a **Política de entrega avançada** em **Políticas e regras** -> **Políticas de ameaças** -> **Entrega avançada**.

   OBS: Temos um script exemplo que pode ajudar. [Script](https://cdn.phishx.io/test/advanceddelivery.txt).

   [Microsoft Defender](https://security.microsoft.com/advanceddelivery)

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_001.png)

2. Editar a **Política de Entrega avançada**.

   Clicar em **Simulação de Phishing**.

   Clicar em **Adicionar**.

   [Referência](https://learn.microsoft.com/pt-br/microsoft-365/security/office-365-security/advanced-delivery-policy-configure?view=o365-worldwide)

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_002.png)

3. Adicionar os **Domínios**.

   Adicionar nossa lista atual de domínios FQDN - Mail From: [FQDN - MAIL FROM](../domains.html#fqdn-mail-from)

   **Observação**: É necessário entrar um domínio por vez no formato **phishx.io**. Pressionar **enter** para inserir o domínio.

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_003.png)

4. Adicionar os **IPs de Envio**.

   Adicionar nossa lista atual de IPs: [IPs](../ips.html#separado-por-linhas)

   **Observação**: É necessário entrar um IP por vez. Pressionar **enter** para inserir o domínio.

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_004.png)

5. Finalizar as configurações.

   Clicar em **Salvar**.

   Clicar em **Fechar**.

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_005.png)

   ![Microsoft Defender](https://cdn.phishx.io/phishx-docs/images/microsoft_defender_advanced_delivery_006.png)
