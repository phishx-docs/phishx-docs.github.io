---
layout: TableLayout-2-25_75
title: Política de Grupo
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Política de Grupo

## Resumo

1. **Configurar** e **implantar** uma nova política do Outlook.

## Configurações

1. **Abra** sua **Política de Grupo**.

2. **Importar** modelo do Outlook.

   Escolha o escopo do usuário.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_gpo_safe_senders_list_01.jpg)

3. **Configure** sua nova política do Outlook..

| Política                                                                                                            | Configurações                                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Substituir ou anexar lista de importação de lixo eletrônico                                                         | Categoria: Lixo Eletrônico<br>Caminho: Microsoft Outlook 2016\Outlook Options\Preferências\Lixo Eletrônico<br>Configurações: Não configurada (Padrão é anexar)               |
| Especifique o caminho para a Lista de Remetentes Confiáveis                                                         | Categoria: Lixo Eletrônico<br>Caminho: Microsoft Outlook 2016\Outlook Options\Preferências\Lixo Eletrônico<br>Configurações: Habilitado (Seu Caminho local)                  |
| Disparar para aplicar configurações da lista de lixo eletrônico                                                     | Categoria: Lixo Eletrônico<br>Caminho: Microsoft Outlook 2016\Outlook Options\Preferências\Lixo Eletrônico<br>Configurações: Habilitado                                      |
| Baixar automaticamente conteúdo para e-mail de pessoas na categoria Listas de remetentes e destinatários confiáveis | Categoria: Automatic Picture Download Configurações<br>Caminho: Microsoft Outlook 2016\Segurança\Configurações de download automático de imagem<br>Configurações: Habilitado |

<br>

4. **Teste** sua política e **distribua** em seu ambiente.
