---
title: Google Chat - Tenant
tags:
  - Integrações
  - Google
  - Chat
---

# Google Chat - Tenant

::: tip Conta administrativa
Para alterar as configurações do Tenant e registrar uma nova aplicação, você precisa utilizar uma conta administrativa.
:::

## Configurações

1. Acessar o **Portal da Azure.** em: [Portal Azure](https://portal.azure.com/).

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_001.png)

2. Acessar **Tenant Properties** em: [Tenant Properties](https://portal.azure.com/#view/Microsoft_AAD_IAM/TenantProperties.ReactView).

   Copiar o **Nome do Tenant**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_002.png)

3. Acessar **App registrations** em: [App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade).

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_003.png)

   Ir em **All aplications**.

   Criar um novo em **New registration**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_004.png)

   **Name**: PhishX-Teams

   **Who can use this application or access this API?**: Accounts in this organizational directory only (... only - Single tenant)

   **Redirect URI (optional)**: Web - https://{subdomain}.phishx.io/live/api/v1/msteams

   Clicar em **Register**.

4. Ir em **Certificates & secrets** e **Client secrets**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_006.png)

   Criar um novo em **New client secret**.

   **Description**: PhishX-Teams-2024

   **Expires**: 730 days (24 months)

   Clicar em **Add**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_007.png)

   Copiar o **Valor do Segredo do Cliente**.

   Copiar a **Data de Expiração do Segredo**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_006.png)

5. Ir em **API permissions**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_008.png)

   Adicionar as permissões de aplicação do Microsoft Graph em **Add a permission**.

   ChannelMember.Read.All

   Group.Read.All

   TeamMember.Read.All

   User.ReadBasic.All

   Dar o consentimento administrativo em **Grant admin consent for ...**.

6. Ir em **Overview**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_009.png)

   Copiar o **ID do Cliente** em **Application (client) ID**.

   Copiar o **ID do Tenant** em **Directory (tenant) ID**.

7. Acessar a **Plataforma PhishX**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_101.png)

   Ir em **Integrações**, **Google Chat** e **Ambientes**.

   Clicar em **Ações** e **Editar**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_102.png)

   Inserir os dados copiados da Azure.

   **Nome do Tenant**
   **Valor do Segredo do Cliente**
   **Data de Expiração do Segredo**
   **ID do Cliente**
   **ID do Tenant**

   Definir quais **domínios** serão permitidos.

   Clicar em **Atualizar**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/microsoft_teams_103.png)
