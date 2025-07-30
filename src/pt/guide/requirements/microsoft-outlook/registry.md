---
title: Registro
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Registro

## Resumo

1. **Atualize seu Registro do Windows** para carregar seu arquivo local.

## Configurações

1. **Identifique sua versão do Microsoft Office** e corrija as entradas para corresponder à sua versão.

   Opcionalmente, se você tiver mais de uma versão, crie configurações adicionais.

2. **Crie um arquivo de registro** com as novas configurações.

   Opcionalmente, altere o caminho local da Lista de Remetentes Confiáveis.

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\16.0\Outlook\Options\Mail]
"JunkMailImportLists"=dword:00000001
"JunkMailSafeSendersFile"="d:\\SafeSenders.txt"
```

![Registro](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_02.jpg)

3. Defina essas configurações como padrão e aplique-as a **todos os usuários**.

   Opcionalmente, certifique-se de que você pode atualizá-lo para adicionar ou revogar quaisquer domínios conforme necessário.
