---
title: Google Chat - Tenant
tags:
  - Integrações
  - Google
  - Chat
---

# Google Chat - Tenant

::: tip Conta administrativa
Para alterar as configurações do Google Workspace e registrar uma nova aplicação, você precisa utilizar uma conta administrativa.
:::

## Configurações

1. Acessar o **Admin Console** em: [Admin Console](https://admin.google.com/ac/home).

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_001.png)

2. Acessar **Manage Domains** em: [Manage Domains](https://admin.google.com/ac/domains/manage).

   Ir em **Account** -> **Domains** -> **Manage Domains**.

   Copiar o **domínios ativos**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_002.png)

3. Acessar **Domain-wide Delegation** em: [Domain-wide Delegation](https://admin.google.com/u/2/ac/owl/domainwidedelegation).

   [Referência](https://support.google.com/a/answer/162106)

   Ir em **Security** -> **Access and Data Control** -> **API Controls** -> **Domain-wide Delegation**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_003.png)

   Criar um novo em **Add new**.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_004.png)

   **Client ID**: 114142889504512322596

   **Oauth Scopes**: copiar e colar os escopos a seguir.

   ```
   https://www.googleapis.com/auth/chat.spaces.create,https://www.googleapis.com/auth/chat.messages.create,https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/admin.directory.domain.readonly,https://www.googleapis.com/auth/admin.directory.user.readonly
   ```

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_005.png)

   Clicar em **Authorize**.

4. Opcionalmente, clicar em **View details** para visualizar.

   ![Google Chat](https://cdn.phishx.io/phishx-docs/images/google_chat_006.png)

5. Acessar a **Plataforma PhishX** para continuar.
