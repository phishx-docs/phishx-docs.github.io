---
title: Microsoft Autenticação
tags:
  - Integrações
  - Autenticação
  - Microsoft
  - Azure
  - AD
  - 365
---

# Microsoft Autenticação - Azure

## Configurar o Consentimento e Permissões (Administrador Microsoft)

1. Verificar se o consentimento do administrador é obrigatório e se o usuário pode solicitar via aplicativo para o administrador.

2. Ir em **Configurações de consentimento do usuário**: [Configurações de consentimento do usuário](https://portal.azure.com/#view/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/~/UserSettings).

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_021.png)

   Verificar e definir a melhor configuração para o seu ambiente.

   **Recomendado**: Deixe a Microsoft gerenciar suas configurações de consentimento (Recomendado)

   **Restrito**: Não permitir o consentimento do usuário

3. Ir em **Configurações de consentimento do administrador**: [Configurações de consentimento do administrador](https://portal.azure.com/#view/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/~/AdminConsentSettings).

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_022.png)

   Verificar e definir a melhor configuração para o seu ambiente.

   **Recomendado**: Os usuários podem solicitar o consentimento do administrador para aplicativos que não conseguem permitir.

## Solicitar o Consentimento (Usuário PhishX)

4. Acessar o seu ambiente **PhishX**. [PhishX](https://phishx.phishx.io/).

   OBS: Alterar **subdomain** pelo subdomínio do seu ambiente PhishX.

   Tentar conectar com a sua conta Microsoft.

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_023.png)

   Enviar solicitação para o seu Administrador Microsoft via formulário.

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_001.png)

   Você receberá uma confirmação via navegador e e-mail de sua solicitação.

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_002.png)

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_011.png)

## Aprovar o Consentimento (Administrador Microsoft)

5. Ir em **Solicitações de consentimento do administrador**: [Solicitações de consentimento do administrador](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AccessRequests).

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_003.png)

   Clicar em **PhishX**.

   Clicar em **Examinar permissões e consentimento**.

   Seguir as **Etapas de Aprovação**.

   Informar o **Usuário Solicitante**.

   O **Usuário Solicitante** vai receber um **e-mail de confirmação**.

## Acessar o seu ambiente PhishX (Usuário PhishX)

6. Aguardar a **confirmação** do seu **Administrador Microsoft** ou **mensagem de e-mail**.

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_012.png)

7. Acessar o seu ambiente **PhishX**. [PhishX](https://phishx.phishx.io/).

   OBS: Alterar **subdomain** pelo subdomínio do seu ambiente PhishX.

   Conectar com a sua conta Microsoft.

   ![Microsoft Auth](https://cdn.phishx.io/phishx-docs/images/microsoft_auth_sso_023.png)

   OBS: Precisa de um usuário cadastrado na PhishX com o seu mesmo e-mail Microsoft.

# (Opcionalmente) Acompanhar os Acessos (Administrador Microsoft)

8. Ir em **Aplicativos empresariais**. [Aplicativos empresariais](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview).
