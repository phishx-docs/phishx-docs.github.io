---
title: Registro de aplicações
tags:
  # - Integrações
  - Microsoft
  - Azure
  - AD
---

# Registro de aplicações

## Resumo

1. Criar um novo Registro de Aplicações. [Registro de Aplicações](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

2. Copiar os seus **locatário**, **id do cliente** and **segredo do cliente**.

## Configurações

1. Acessar **Registro de Aplicações**.

   [Registro de Aplicações](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

   ![Registro de Aplicações](https://cdn.phishx.io/phishx-docs/images/azure_ad_03.webp)

2. Clicar **Novo Registro**.

3. Em **Registrar uma aplicação**:

   Em **Nome** inserir **PhishX**.

   Em **Tipos de conta com suporte** selecionar **Contas somente neste diretório organizacional (... somente - locatário único)**.

   Em **URI de redirecionamento (opcional)** inserir a sua **URL da PhishX**: **https://meu_subdominio.phishx.io/azuread**.

   Clicar **Registrar**.

   ![Novo Registro](https://cdn.phishx.io/phishx-docs/images/azure_ad_04.webp)

4. Editar sua **Aplicação PhishX**.

   ![Aplicação PhishX](https://cdn.phishx.io/phishx-docs/images/azure_ad_05.webp)

5. Em **Visão geral**:

   Copie seu **ID do aplicativo (cliente)**.

   Copie seu **ID do diretório (locatário)**.

   ![Visão geral](https://cdn.phishx.io/phishx-docs/images/azure_ad_06.webp)

6. Em **Marca**:

   Em **Nome** inserir **PhishX**.

   Em **URL da Página incial** inserir **https://www.phishx.io/**.

   Em **URL dos termos de serviço** inserir **https://terms.phishx.io/**.

   Em **URL da declaração de privacidade** inserir **https://terms.phishx.io/**.

   Clicar **Salvar**.

   ![Marca](https://cdn.phishx.io/phishx-docs/images/azure_ad_07.webp)

7. Em **Autenticação**:

   Em **URL de logout** inserir a sua **URL da PhishX**: **https://meu_subdominio.phishx.io/azuread**.

   Em **Concessão implícita** selecionar **tokens de ID**.

   Clicar **Salvar**.

   ![Autenticação](https://cdn.phishx.io/phishx-docs/images/azure_ad_08.webp)

8. Em **Certificados e Segredos**:

   Clicar **Novo segredo do cliente**.

   ![Certificados e Segredos](https://cdn.phishx.io/phishx-docs/images/azure_ad_09.webp)

   Em **Descrição** inserir **PhishX**.

   Em **Expira** selecionar **Em 1 ano**.

   Clicar **Adicionar**.

   ![Certificados e Segredos](https://cdn.phishx.io/phishx-docs/images/azure_ad_10.webp)

   Copiar seu **Segredo do Cliente**.

   ![Certificados e Segredos](https://cdn.phishx.io/phishx-docs/images/azure_ad_11.webp)

9. Em **Configuração de Token**:

   Clicar **Adicionar reivindicação opcional**.

   ![Configuração de Token](https://cdn.phishx.io/phishx-docs/images/azure_ad_12.webp)

   Em **Tipo do token** selecionar **ID**.

   Em **Reivindicação** selecionar **e-mail**, **given_name**, **family_name**, **sid** e **upn**.

   Clicar **Adicionar**.

   ![Configuração de Token](https://cdn.phishx.io/phishx-docs/images/azure_ad_13.webp)
