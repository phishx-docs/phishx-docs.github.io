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

   Em **Name**, inserir: **PhishX - Azure Contacts Integration - 2023**

   Em **Supported account types**, escolher de acordo com a sua organização: **Accounts in this organizational directory only (phishxmsdev only - Single tenant)**

   Em **Redirect URI (optional)**, escolher o tipo **Web** e inserir a url **https://auth.phishx.io/live/en/microsoftgraph**

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

   Em **Description**, inserir: **PhishX-Azure-Contacts-2023**

   Em **Expires**, selecionar **730 days (24 months)**.

   Clicar em **Add**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_206.png)

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_207.png)

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_208.png)

5. **Montar sua URL** de consentimento.

   Em **Overview**, copie o **TENANT_ID** em **Directory (tenant) ID**.

   Em **Overview**, copie o **CLIENT_ID** em **Application (client) ID**.

   Em **Overview**, copie o **OBJECT_ID** em **Object ID**.

   Copie o **TENANT_NAME** com o nome do seu **tenant**. Ex: "phishxmsdev"

   Copie o **TENANT_DOMAIN** com o domínio principal do seu **tenant**. Ex: "phishxmsdev.onmicrosoft.com"

   Utilize o seu **Sudomínio PhishX**.

   Crie o seu **STATE** no seguinte formato:

<br>

   ```
   {PHISHX_SUBDOMAIN}|{CLIENT_ID}|{OBJECT_ID}|{CLIENT_SECRET}|{TENANT_ID}|{TENANT_NAME}|{TENANT_DOMAIN}
   ```

   Crie a sua **REDIRECT_URL** no seguinte formato:

<br>

   ```
   https://auth.phishx.io/live/en/microsoftgraph
   ```

<br>

   Crie a sua **URL de Consentimento** no seguinte formato:

   ```
   https://login.microsoftonline.com/{TENANT_ID}/adminconsent?client_id={CLIENT_ID}&state={STATE}&redirect_uri={REDIRECT_URL}
   ```

   Sua URL deve ficar similar ao exemplo a seguir:

<br>

   ```
   https://login.microsoftonline.com/bcb53ee9-0c7c-4768-86ea-3f033ae213b7/adminconsent?client_id=63c62ddc-8a44-45f2-8ec9-7df446d3dd9f&state=phishx|63c62ddc-8a44-45f2-8ec9-7df446d3dd9f|a0a3cc0f-5351-4a38-892e-d8842698fc6c|4aG8Q~j-NB4D6hlxu7s3tppxjKxHgEUDOR3ZfaB7|bcb53ee9-0c7c-4768-86ea-3f033ae213b7|phishxmsdev|phishxmsdev.onmicrosoft.com&redirect_uri=https://auth.phishx.io/live/en/microsoftgraph
   ```

6. Conceda o **consentimento** através do link gerado.

   Acessar o link e clicar em **Aceitar**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_008.png)

7. Visualize as **configurações** em: [Configurações](settings).
