---
layout: TableLayout-2-25_75
title: Group Policy
tags:
  - Requirements
  - Microsoft
  - Office
  - Outlook
  - 365
---
# Group Policy

## TL;DR

1. **Set up** and **deploy** new Outlook policy.

## Settings

1. **Open** your **group policy**.

2. **Import Outlook** template.

   Choose user scope.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_gpo_safe_senders_list_01.jpg)

3. **Set up** your new Outlook policy.

| Policy | Settings |
| :--- | :--- |
| Overwrite or Append Junk Mail Import List | Category: Junk E-mail<br>Path: Microsoft Outlook 2016\Outlook Options\Preferences\Junk E-mail<br>Settings: Not configured (Default is append) |
| Specify path to Safe Senders list | Category: Junk E-mail<br>Path: Microsoft Outlook 2016\Outlook Options\Preferences\Junk E-mail<br>Settings: Enabled (Your local path) |
| Trigger to apply junk email list settings | Category: Junk E-mail<br>Path: Microsoft Outlook 2016\Outlook Options\Preferences\Junk E-mail<br>Settings: Enabled |
| Automatically download content for e-mail from people in Safe Senders and Safe Recipients Lists | Category: Automatic Picture Download Settings<br>Path: Microsoft Outlook 2016\Security\Automatic Picture Download Settings<br>Settings: Enabled |
<br>

4. **Test** your policy and **deploy** it in your environment.
