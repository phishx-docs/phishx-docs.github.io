---
layout: TableLayout-2-25_75
title: Microsoft Outlook
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Microsoft Outlook

::: tip Mensagens em sua caixa de entrada
Endereços de e-mail e nomes de domínio na Lista de Remetentes Confiáveis nunca são tratados como lixo eletrônico, independentemente do conteúdo da mensagem. Você pode adicionar seus contatos e outros correspondentes à lista de Remetentes Confiáveis para confirmar que sempre receberá suas mensagens em sua caixa de entrada.
:::

::: tip Baixe imagens e conteúdo automaticamente
Por padrão, o Outlook não baixa imagens ou outro conteúdo automaticamente, exceto quando o conteúdo externo vem de um site na zona de Sites Confiáveis ou de um endereço ou domínio especificado na Lista de Remetentes Confiáveis.
:::

## Resumo

1. Adicione nossos domínios à sua **Lista de Remetentes Confiáveis**. [Domínios](../domains.html#lista-de-remetentes-confiaveis)

2. Adicione quaisquer domínios internos extras à sua **Lista de Remetentes Confiáveis**.

## Configurações

1. **Converse com seu time interno** e **escolha a melhor maneira** de configurar sua **Lista de Remetentes Confiáveis**.

   [Arquivos de Modelo Administrativo](https://www.microsoft.com/en-us/download/details.aspx?id=49030)

   [Office Ferramenta de Personalização](https://docs.microsoft.com/pt-br/deployoffice/oct/oct-2016-help-overview)

| Método                              | Descrição                                                                                    |
| :---------------------------------- | :------------------------------------------------------------------------------------------- |
| [Pessoal](personal/)                | Cada pessoa tem que confiar individualmente no remetente e / ou no domínio.                  |
| [Lista](list/)                      | Você precisa disponibilizar uma lista atualizada.                                            |
| [Registro](registry/)               | Você precisa alterar algumas configurações no Registro do Windows.                           |
| [Powershell](powershell/)           | Você altera dinamicamente algumas configurações no Registro do Windows via Powershell.       |
| Script de Logon                     | Crie uma forma automatizada de atualizar um arquivo local e alterar o Registro a cada logon. |
| [Política de Grupo](gpo/)           | Use um modelo administrativo oficial para implantar.                                         |
| [Proteção do Exchange Online](eop/) | Use a Proteção do Exchange Online para implantar.                                            |

<br>

2. **Verifique sua lista atual** de **Remetentes Confiáveis** no Microsoft Outlook.

   Acessar **Início** -> **Lixo Eletrônico** -> **Opções de Lixo Eletrônico** -> **Remetentes Confiáveis**.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
