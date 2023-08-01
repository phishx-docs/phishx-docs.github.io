---
title: Microsoft Sync - Assistente
tags:
  - Integrações
  - Microsoft
  - Azure
  - AD
  - 365
---

## Configurações

1. Acessar **Azure Active Directory** em: [Azure Active Directory](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview).

   Acessar **Overview**.

   ![Azure Active Directory](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_helper_000.png)

   Copiar **Tenant Name**, **Tenant ID** e **Primary domain**.

   ```
   Tenant Name: phishxmsdev
   Tenant ID: bcb53ee9-0c7c-4768-86ea-...
   Primary domain: phishxmsdev.onmicrosoft.com
   ```

2. Acessar **App registrations**. Escolher o seu **aplicativo** em: [App registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade).

   Acessar **Overview**.

   ![App registrations](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_helper_001.png)

   Copiar **Client ID** e **Object ID**.

   ```
   Application (client) ID: 63c62ddc-8a44-45f2-8ec9-...
   Object ID: a0a3cc0f-5351-4a38-892e-...
   ```

   Acessar **Certificates & secrets**.

   ![Certificates & secrets](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_helper_002.png)

   Copiar o **Value** do segredo.

   OBS: Se não for possível copiar, pode criar um novo segredo.

   ```
   Secret Value: Rt78Q~d3bwAdgiOJUPYFeFRv_...
   ```

3. Acessar o **Assistente para Consentimento da PhishX** em: [Assistente para Consentimento da PhishX](https://phishx.phishx.io/live/pt/microsoftgraph/helper).

   ![Assistente para Consentimento da PhishX](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_helper_010.png)

   Inserir o seu **subdomínio** da PhishX. O seu sudomínio geralmente é o seu domínio principal do seu site.

   ```
   Site: www.phishx.io
   Subdomain: phishx
   ```

   **Inserir os dados copiados** nos respectivos campos.

   Clicar em **Gerar**

   ![Assistente para Consentimento da PhishX](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_helper_011.png)

   Copiar a url de consentimento em **URL** e acessar.

   ![Assistente para Consentimento da PhishX](https://cdn.phishx.io/phishx-docs/phishx_auth_001.png)

   Dar o consentimento.

   Copiar a url de status em **Status** e acessar.

   Verificar se o status está completo. O status deve ficar similar a imagem a seguir:

   ![Assistente para Consentimento da PhishX](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_102.png)
