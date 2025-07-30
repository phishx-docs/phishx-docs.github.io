---
title: Filtro de spam
tags:
  - Requisitos
  - Microsoft
  - Office
  - 365
---

# Filtro de spam

## Resumo

1. Criar um novo Filtro de Spam em **proteção** -> **filtro de spam**. Adicionar nossa lista atual de domínios: [Domínios](../domains.html#separado-por-ponto-e-virgulas)

## Configurações

1. Acessar o atual **Microsoft 365 Exchange admin center**.

   [Exchange Admin Center](https://outlook.office365.com/ecp/)

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_365_10.webp)

2. Ir para **filtro de spam** no menu: **proteção** -> **filtro de spam**.

   Adicionar um novo. Clicar **+**.

   [Referência](https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/configure-your-spam-filter-policies)

   ![Novo Conector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_11.webp)

3. Em **nova política de filtro de spam** -> **\*Nome** inserir "PhishX".

   ![Nome](https://cdn.phishx.io/phishx-docs/images/microsoft_365_12.webp)

4. Em **nova política de filtro de spam** -> **Lista de permissão de domínios** -> **Sempre entregue e-mails dos seguintes domínios na caixa de entrada**.

   Clicar **+**.

5. Em **adicionar domínio permitido** adicionar nossa lista atual de domínios: [Domínios](../domains.html#separado-por-ponto-e-virgulas).

   Clicar **Ok**.

   ::: tip Dica
   Remover todos os espaços extras após colar.
   :::

   ![adicionar domínio permitido](https://cdn.phishx.io/phishx-docs/images/microsoft_365_13.webp)

   ![adicionar domínio permitido](https://cdn.phishx.io/phishx-docs/images/microsoft_365_14.webp)

6. In **nova política de filtro de spam** -> **Aplicar para** selecionar **O domínio do destinatário é** e adicionar seus próprios domínios.

   Clicar **Ok**.

   ![Aplicar para](https://cdn.phishx.io/phishx-docs/images/microsoft_365_15.webp)

   ![Aplicar para](https://cdn.phishx.io/phishx-docs/images/microsoft_365_16.webp)

7. Clicar **Salvar**.

   ![Atualização completa](https://cdn.phishx.io/phishx-docs/images/microsoft_365_17.webp)

   ![Informação](https://cdn.phishx.io/phishx-docs/images/microsoft_365_18.webp)

   ![Conector criado](https://cdn.phishx.io/phishx-docs/images/microsoft_365_19.webp)

   ![filtro de spam](https://cdn.phishx.io/phishx-docs/images/microsoft_365_20.webp)
