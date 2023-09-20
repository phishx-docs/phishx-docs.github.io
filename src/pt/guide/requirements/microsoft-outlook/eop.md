---
layout: TableLayout-2-25_75
title: Proteção do Exchange Online
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Proteção do Exchange Online

## Resumo

1. **Configurar** e **implantar** os domínios permitidos em suas caixas postais online.

## Configurações

1. **Converse com seu time interno** e **escolha a melhor maneira** de configurar sua **Lista de Remetentes Confiáveis** no EOP.

   [Criar listas de remetentes seguros no EOP](https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide)

   [Definir as configurações de lixo eletrônico nas caixas de correio do Exchange Online](https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide)

2. **Instale** os requisitos para executar os comandos via **Powershell**.

   OBS: Powershell precisa ser atualizado.

```
Install-PackageProvider -Name NuGet -Force
Install-Module -Name PowerShellGet -Force
Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
```

3. **Conecte** ao Exchange Online.

   Utilize um usuário administrativo.

```
Set-ExecutionPolicy RemoteSigned
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>
```

3. **Filtre** os usuários de acordo com o escopo e onda de distribuição.

   Para aplicar em todos os usuários.

```
$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited
```

Para aplicar apenas em um grupo de usuários.

```
$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited
```

4. **Configure** os domínios que os usuários devem confiar em sua **Lista de Remetentes Confiáveis**.

   Defina os **domínios** que serão utilizados. [Domínios](../domains.html#separada-por-espacos)

   Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.

```
$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one"}}
```

5. **Valide** os domínios de um usuário.

   Utilize um usuário que recebeu as novas configurações.

```
Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*
```

Opcionalmente confirme no Outlook do usuário.

Acessar **Início** -> **Lixo Eletrônico** -> **Opções de Lixo Eletrônico** -> **Remetentes Confiáveis**.

![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
