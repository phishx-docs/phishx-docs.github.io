---
title: Microsoft Entra ID (SCIM) - Azure
tags:
  - Integrações
  - Microsoft
  - Azure
  - Entra ID
  - SCIM
---

# Microsoft Entra ID (SCIM)

## Configurações

1. Acessar o [Microsoft Entra ID](https://entra.microsoft.com/)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_001.png)

   No menu lateral, ir em **Aplicativos empresariais**. [Aplicativos Empresariais](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_002.png)

   Clicar em **Novo aplicativo**.

   Clicar em **Crie seu próprio aplicativo**.

   [Referência](https://learn.microsoft.com/pt-br/entra/identity/app-provisioning/user-provisioning)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_004.png)

   Preencher em nome: **PhishX SCIM V2**.

   Em **O que você deseja fazer com o seu aplicativo?**, escolher **Integrar qualquer outro aplicativo que você não encontre na galeria**.

   No menu lateral do aplicativo recém-criado, clicar em **Provisionamento**.

   Clicar em **Nova configuração**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_006.png)

   Em **Selecione o método de autenticação**, escolher **Autenticação de portador**.

   Em **URL do locatário**, preencher: **<https://api.phishx.io/scim/v2>**

   Em **Token secreto**, preencher com o seu **Token da PhishX API**.

   OBS: Para obter seu token, solicite apoio do time de **Customer Success**.

   Clicar em **Testar conectividade**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_008.png)

   Após o teste com sucesso, clicar em **Criar**.

2. Alterar o **padrão de mapeamento** no menu lateral **Mapeamento de atributos**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_011.png)

   Procurar em **Procedência correspondente** o valor **1** e clicar em **editar**.

   Em **Precedência de correspondência**, escolher **2**.

   Clicar em **Aplicar**.

   Procurar em **Atributo de Destino** o valor **externalId** e clicar em **editar**.

   Em **Atributo de origem (Microsoft Entra ID)**, escolher **objectId**

   Marcar a opção **Corresponder objetos usando este atributo**.

   Em **Precedência de correspondência**, escolher **1**.

   Clicar em **Aplicar**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_012.png)

   Clicar em **Salvar**.

3. Adicionar os **Usuários** que participarão do provisionamento no menu lateral **Usuários e Grupos**.

   Clicar em **Adicionar um usuário ou um grupo**.

   Selecionar o escopo e clicar em **Atribuir**.

4. Para **Testar o provisionamento**, acesse no menu lateral **Provisão sob demanda**.

   Selecionar um **usuário de teste** e clicar em **Provisão**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_013.png)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_014.png)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_015.png)
