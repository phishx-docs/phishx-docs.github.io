---
title: Microsoft Sync - Azure
tags:
  - Integrações
  - Microsoft
  - Azure
  - AD
  - 365
---

# Sincronização de Contatos da Microsoft - Azure

::: tip Configuração simplificada via Powershell
As configurações de registro de aplicações são mais fáceis através de comandos em Powershell.
:::

## Configurações

1. **Registrar um novo aplicativo** em: [App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade).

   Clicar em **New registration**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_201.png)

2. Configurar o novo aplicativo.

   Em **Name**, inserir: **PhishX - Azure Contacts Integration - 2024**

   Em **Supported account types**, escolher de acordo com a sua organização: **Accounts in this organizational directory only (phishxmsdev only - Single tenant)**

   Em **Redirect URI (optional)**, escolher o tipo **Web** e inserir a url com o seu subdomínio: **https://{subdomain}.phishx.io/live/en/microsoftgraph**

   Clicar em **Register**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_202.png)

3. Acessar **API permissions**.

   Clicar em **Add a permission**.

   Selecionar **Microsoft Graph**.

   Selecionar **Application permissions**.

   Adicionar as seguintes permissões.

<br>

```
User.Read
User.Read.All
Group.Read.All
Application.Read.All
```

Clicar em **Add a permission**.

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_203.png)

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_204.png)

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_205.png)

4. Acessar **Certificates & secrets**.

   Clicar em **Client Secrets**.

   Clicar em **New Client Secret**.

   Em **Description**, inserir: **PhishX-Azure-Contacts-2024**

   Em **Expires**, selecionar **730 days (24 months)**.

   Clicar em **Add**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_206.png)

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_207.png)

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_208.png)

   Copiar o **Value** do segredo.

   ```
   **Secret Value**: Rt78Q~d3bwAdgiOJUPYFeFRv_...
   ```

5. **Montar sua URL** de consentimento em: [Assistente para Consentimento da PhishX](helper/).
