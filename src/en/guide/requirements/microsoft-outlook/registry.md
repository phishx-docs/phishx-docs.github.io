---
title: Registry
tags:
  - Requirements
  - Microsoft
  - Office
  - Outlook
  - 365
---
# Registry

## TL;DR

1. **Update your Windows Registry** to load your local file.

## Settings

1. **Identify your Microsoft Office Version** and correct the entries to match your version.

   Optionally if you have more than one version create additional settings.

2. **Create a text registry file** with the new settings.

   Optionally change your Safe Senders List local path.

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\16.0\Outlook\Options\Mail]
"JunkMailImportLists"=dword:00000001
"JunkMailSafeSendersFile"="d:\\SafeSenders.txt"
```

  ![Registry](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_02.jpg)

3. Make this settings default and applied to **all users**.

   Optionally ensure that you can update it to add or revoke any domains as needed.