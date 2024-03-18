---
layout: TableLayout-2-25_75
title: Exchange Online Protection
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Exchange Online Protection

## Resumen

1. **Configure** e **Implemente** los dominios permitidos en sus buzones de correo en línea.

## Configuraciones

1. **Habla con tu equipo interno** y **elige la mejor manera** de configurar tu **Lista de remitentes confiables** en EOP.

   [Crear listas de remitentes seguros en EOP](https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide)

   [Configurar las opciones del correo no deseado en buzones de Exchange Online](https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide)

2. **Instale** los requisitos para ejecutar comandos a través de **Powershell**.

```
Install-PackageProvider -Name NuGet -Force
Install-Module -Name PowerShellGet -Force
Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
```

3. **Conéctese** a Exchange Online.

   Utilice un usuario administrativo.

```
Set-ExecutionPolicy RemoteSigned
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>
```

3. **Filtra** usuarios según alcance y ola de distribución.

   Aplicar a todos los usuarios.

```
$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited
```

Aplicar solo a un grupo de usuarios.

```
$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited
```

4. **Configure** los dominios en los que los usuarios deben confiar en su **Lista de remitentes confiables**.

   Defina los **dominios** que se utilizarán. [Dominios](../domains.html#separado-por-espacios)

   Opcionalmente, agregue otros dominios internos y de terceros en los que confiar a través de la Lista de remitentes seguros.

```
$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one","appcentral.info","apphub.lat","bizconnect.click","cloudconnect.cfd","datalink.lol","datasync.store","datatips.pro","devicecloud.life","deviceguard.pro","infoportal.live","linkhub.digital","mailvault.site","messagevault.store","newsbyte.click","newsflash.click","newslink.digital","onlineguide.one","privacyportal.store","privatemessage.cloud","privatemessage.lat","professionalhub.click","proopportunity.one","quicktips.site","securetech.lat","shopsmart.bond","smartdevice.live","technews.rest","techwave.pics","traveltips.quest","trendalert.store"}}
```

5. **Validar** los dominios de un usuario.

   Utilice un usuario que haya recibido la nueva configuración.

```
Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*
```

Opcionalmente, confirme en Outlook del usuario.

Acceder **Inicio** -> **Basura Electrónica** -> **Opciones de Basura Electrónica** -> **Remitentes Confiabless**.

![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
