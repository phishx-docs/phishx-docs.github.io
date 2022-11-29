---
layout: TableLayout-2-25_75
title: Exchange Online Protection
tags:
  - Requirements
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Exchange Online Protection

## TL","DR

1. **Configure** and **Deploy** the allowed domains in your online mailboxes.

## Settings

1. **Talk to your internal team** and **choose the best way** to set up your **Trusted Senders List** in EOP.

   [Create safe sender lists in EOP](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide)

   [Configure junk email settings on Exchange Online mailboxes](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide)

2. **Install** the requirements to run commands via **Powershell**.

```
Install-PackageProvider -Name NuGet -Force
Install-Module -Name PowerShellGet -Force
Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
```

3. **Connect** to Exchange Online.

   Use an administrative user.

```
Set-ExecutionPolicy RemoteSigned
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>
```

3. **Filter** users according to scope and wave of distribution.

   To apply to all users.

```
$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited
```

To apply only to a group of users.

```
$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited
```

4. **Configure** the domains users should trust in your **Trusted Senders List**.

   Define the **domains** that will be used. [Domains](../domains.html#separated-by-spaces)

   Optionally add other internal and third-party domains to be trusted via the Safe Senders List.

```
$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io,phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one"}}
```

5. **Validate** a user's domains.

   Use an user who received the new settings.

```
Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*
```

Optionally confirm in user's Outlook.

Go to **Home** -> **Junk** -> **Junk E-mail Options** -> **Safe Senders**.

![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
