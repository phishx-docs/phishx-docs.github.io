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

   OBS: Temos um script exemplo que pode ajudar. [Script](https://cdn.phishx.io/test/safesenders.txt).

2. **Instale** os requisitos para executar os comandos via **Powershell**.

   OBS: Powershell precisa ser atualizado.

```powershell
Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser -Force -AllowClobber -AcceptLicense
```

3. **Conecte** ao Exchange Online.

   Utilize um usuário administrativo.

```powershell
Set-ExecutionPolicy RemoteSigned
Import-Module ExchangeOnlineManagement
$userAdmin = "USER-ADMIN@DOMAIN"
Connect-ExchangeOnline -UserPrincipalName $userAdmin
(Get-ConnectionInformation).UserPrincipalName
```

3. **Filtre** os usuários de acordo com o escopo e onda de distribuição.

   Para aplicar em todos os usuários.

```powershell
$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited
$All | Measure-Object | Select-Object -ExpandProperty Count
```

Para aplicar apenas em um grupo de usuários.

```powershell
$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited
$All | Measure-Object | Select-Object -ExpandProperty Count
```

4. **Configure** os domínios que os usuários devem confiar em sua **Lista de Remetentes Confiáveis**.

   Defina os **domínios** que serão utilizados. [Domínios](../domains.html#separada-por-espacos)

   Opcionalmente, adicione outros domínios de terceiros para serem confiados via Lista de Remetentes Confiáveis.

```powershell
$safeDomains = @("appcentral.info","appstudio.shop","businessuniversity.tech","cloudacademy.live","cloudconnect.cfd","dealsnews.club","deviceguard.pro","digitaleducation.digital","festivalnews.online","infoportal.live","linkdata.live","mailvault.site","marketonline.one","microlearning.academy","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","proopportunity.one","securedevice.site","securetech.lat","securityapp.cloud","smartdevice.live","technews.rest","trainingportal.me","varejoonline.club","webportal.one")
$safeDomains | Measure-Object | Select-Object -ExpandProperty Count

$errorLogFile = ".\JunkEmailConfigErrors.txt"
Clear-Content -Path $errorLogFile -ErrorAction SilentlyContinue
$All | ForEach-Object {
  $mailbox = $_
  $mailboxName = $mailbox.Name
  $mailboxAlias = $_.Alias
  $userDomains = $mailbox.EmailAddresses | ForEach-Object {
    $emailAddress = $_.ToString().Split(':')[-1]
    $emailAddress.Split('@')[-1]
  } | Where-Object { $_ -notlike "SPO_*" } | Sort-Object -Unique
  $filteredSafeDomains = $safeDomains | Where-Object { $userDomains -notcontains $_ }
  $filteredSafeDomainsQty = $filteredSafeDomains | Measure-Object | Select-Object -ExpandProperty Count
  try {
    Set-MailboxJunkEmailConfiguration $mailboxName -TrustedSendersAndDomains @{Add=$safeDomains} -ErrorAction Stop
    Write-Host "Successfully updated with ${filteredSafeDomainsQty} domains in junk email configuration for ${mailboxAlias}."
  }
  catch {
    $errorMessage = "Error processing $mailboxAlias (Domain: $userDomains): $($_.Exception.Message)"
    Write-Host "$errorMessage" -ForegroundColor Red
    $errorMessage | Out-File -FilePath $errorLogFile -Append
  }
}
$errorsQty = Get-Content $errorLogFile | Measure-Object | Select-Object -ExpandProperty Count
Write-Host "Script finished. Check '$errorLogFile' for any errors (${errorsQty})."
```

5. **Valide** os domínios de um usuário.

   Utilize um usuário que recebeu as novas configurações.

```powershell
$userTest = "USER-TEST@DOMAIN"
$userDomain = ($userTest.Split('@'))[1]
Set-MailboxJunkEmailConfiguration -Identity $userTest -TrustedSendersAndDomains @{Add=$userDomain}
(Get-MailboxJunkEmailConfiguration -Identity $userTest).TrustedSendersAndDomains | ConvertTo-Json
```

Opcionalmente confirme no Outlook do usuário.

Acessar no Outlook Novo **Configurações** -> **E-mail** -> **Lixo eletrônico** -> **Remetentes** -> **Domínios e remetentes**.

Acessar no Outlook Clássico **Página Inicial** -> **Exlcuir** -> **Lixo Eletrônico** -> **Opções de Lixo Eletrônico** -> **Remetentes Confiáveis**.

![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
