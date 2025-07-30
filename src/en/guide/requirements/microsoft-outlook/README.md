---
layout: TableLayout-2-25_75
title: Microsoft Outlook
tags:
  - Requirements
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Microsoft Outlook

::: tip Messages in your inbox
Email addresses and domain names in the Safe Senders List are never treated as junk email, regardless of the content of the message. You can add your Contacts and other correspondents to the Safe Senders list to confirm you'll always receive their messages in your inbox.
:::

::: tip Download pictures and content automatically
By default, Outlook does not download pictures or other content automatically, except when the external content comes from a Web site in the Trusted Sites zone, or from an address or domain specified in the Safe Senders List.
:::

## TL;DR

1. Add our domains to your **Safe Senders List**. [Domains](../domains.html#separated-by-semi-colons)

2. Add any extra internal domains to your **Safe Senders List**.

## Settings

1. **Talk to your internal Teams** and **choose the best way** to set up your **Safe Senders List**.

   [Administrative Template files](https://www.microsoft.com/en-us/download/details.aspx?id=49030)

   [Office Customization Tool](https://docs.microsoft.com/en-us/deployoffice/oct/oct-2016-help-overview)

| Method                             | Description                                                                           |
| :--------------------------------- | :------------------------------------------------------------------------------------ |
| [Personal](personal/)              | Every person has to trust individually the sender and / or the domain.                |
| [List](list/)                      | You need to make available an updated list.                                           |
| [Registry](registry/)              | You need to change a few settings in the local Windows Registry.                      |
| [Powershell](powershell/)          | You dynamically change some settings in the Windows Registry via Powershell.          |
| Logon Script                       | Create an automated way to update a local file and change the Registry in each logon. |
| [Group Policy](gpo/)               | Use an official administrative template to deploy.                                    |
| [Exchange Online Protection](eop/) | Use Exchange Online Protectio to deploy.                                              |

<br>

2. **Verify your current** Microsoft Outlook **Safe Senders List**.

   Go to **Home** -> **Junk** -> **Junk E-mail Options** -> **Safe Senders**.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
