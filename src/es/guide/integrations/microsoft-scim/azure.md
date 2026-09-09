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

### Parte 1 - Aplicativo

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

### Parte 2 - Mapeamento de atributos

1. Alterar o **padrão de mapeamento** no menu lateral **Mapeamento de atributos**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_011.png)

   Procurar em **Procedência correspondente** o valor **1** e clicar em **editar**.

   Em **Precedência de correspondência**, escolher **2**.

   Clicar em **Aplicar**.

   Procurar em **Atributo de Destino** o valor **externalId** e clicar em **editar**.

   Em **Atributo de origem (Microsoft Entra ID)**, escolher **objectId**

   Marcar a opção **Corresponder objetos usando este atributo**.

   Em **Precedência de correspondência**, escolher **1**.

   Clicar em **Aplicar**.

   Clicar em **Adicionar o mapeamento de atributo**.

   Em **Tipo de mapeamento**, escolher **Expressão**

   Em **Expressão**, escolher **SingleAppRoleAssignment([appRoleAssignments])**

   Em **Valor padrão (se nulo)**, escolher **PhishX Group User**

   Em **Atributo de destino (customappsso)**, escolher **roles[primary eq "True"].value**

   Em **Aplicar este mapeamento**, escolher **Sempre**

   Desmarcar a opção **Corresponder objetos usando este atributo**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_023.png)

   Clicar em **Aplicar**.

   | Atributo de Origem                            | Atributo de Destino            | Tipo de Mapeamento | Procedência correspondente |
   | :-------------------------------------------- | :----------------------------- | :----------------- | :------------------------- |
   | objectId                                      | externalId                     | Direto             | 1                          |
   | userPrincipalName                             | userName                       | Direto             | 2                          |
   | SingleAppRoleAssignment([appRoleAssignments]) | roles[primary eq "True"].value | Expressão          |                            |

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_022.png)

   Clicar em **Salvar**.

### Parte 3 - Funções do Aplicativo

1. Ir em [Registros de Aplicativo](https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)

   Acessar **Todos os aplicativos** e escolher o aplicativo.

   No menu lateral, acessar **Funções de aplicativo**.

   Criar as funções em **Criar uma função de aplicativo**.

   Em **Nome de exibição**: **PhishX Group Super**

   Em **Tipos de membro permitidos**: **Usuários/Grupos**

   Em **Valor**: **group_super**

   Em **Descrição**: **Usuário administrativo com poderes totais no Grupo de Negócios.**

   Marcar **Deseja habilitar esta função de aplicativo?**

   Clicar em **Aplicar**.

   Criar as funções em **Criar uma função de aplicativo**.

   Em **Nome de exibição**: **PhishX Group User**

   Em **Tipos de membro permitidos**: **Usuários/Grupos**

   Em **Valor**: **group_user**

   Em **Descrição**: **Usuário de leitura no Grupo de Negócios.**

   Marcar **Deseja habilitar esta função de aplicativo?**

   Clicar em **Aplicar**.

   | Nome de exibição   | Tipos de membro permitidos | Valor       | Descrição                                                       |
   | :----------------- | :------------------------- | :---------- | :-------------------------------------------------------------- |
   | PhishX Group Super | Usuários/Grupos            | group_super | Usuário administrativo com poderes totais no Grupo de Negócios. |
   | PhishX Group User  | Usuários/Grupos            | group_user  | Usuário de leitura no Grupo de Negócios.                        |

   **Opcionalmente**, criar outras funções a seguir.

   | Nome de exibição     | Tipos de membro permitidos | Valor         | Descrição                                                               |
   | :------------------- | :------------------------- | :------------ | :---------------------------------------------------------------------- |
   | PhishX Account Super | Usuários/Grupos            | account_super | Usuário administrativo com poderes totais apenas no ambiente principal. |
   | PhishX Account User  | Usuários/Grupos            | account_user  | Usuário de leitura apenas no ambiente principal.                        |

   **Observação**: existem outros perfis possíveis em [Autorização](../../users/authorization)

### Parte 4 - Atribuir Usuários

1. Adicionar os **Usuários** que participarão do provisionamento no menu lateral **Usuários e Grupos**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_025.png)

   Clicar em **Adicionar um usuário ou um grupo**.

   Selecionar os **usuários** e a **função**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_024.png)

   Clicar em **Atribuir**.

2. Para **Testar o provisionamento**, acesse no menu lateral **Provisão sob demanda**.

   Selecionar um **usuário de teste** e clicar em **Provisão**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_013.png)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_014.png)

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_015.png)

3. Acessar no menu lateral **Provisionamento**.

   Em **Status de provisionamento**, escolher **Ativado**.

   Clicar em **Salvar**.

   ![Microsoft SCIM](https://cdn.phishx.io/phishx-docs/images/scim_microsoft_026.png)
