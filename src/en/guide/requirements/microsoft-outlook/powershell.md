---
title: Powershell
tags:
  - Requirements
  - Microsoft
  - Office
  - Outlook
  - 365
---
# Powershell

## TL;DR

1. **Update your Windows Registry** via Powershell script.

## Settings

1. **Identify your version of Microsoft Office** and correct entries to match your version.

   Optionally, if you have more than one version, create additional configurations.

2. **Create a Powershell script** with the new settings.

   Optionally add other internal and third-party domains to be trusted via the Safe Senders List.

```
# VARIABLES
$localdir = $Env:USERPROFILE
$localfile = "domains.txt"
$localfilecomplete = "$localdir\$localfile"
$localfiletest = Test-Path -Path $localfilecomplete

#### TEST
## GET POLICY
#Get-ExecutionPolicy -Scope LocalMachine
## SET POLICY
#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine
## UNSET POLICY
#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine
####

# BASE DIR
Set-Location -Path $localdir
# REMOVE PREVIOUS
if ($localfiletest) {Remove-Item $localfile} else {}
New-Item $localfile
# ADD CONTENT
# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html
Set-Content $localfile 'phishx.io'
Add-Content $localfile 'phishx.com'
Add-Content $localfile 'anbiental.com'
Add-Content $localfile 'appnews.cloud'
Add-Content $localfile 'appto.click'
Add-Content $localfile 'bankto.me'
Add-Content $localfile 'datagov.online'
Add-Content $localfile 'dealsnow.space'
Add-Content $localfile 'festivalnews.online'
Add-Content $localfile 'goonline.quest'
Add-Content $localfile 'govonline.click'
Add-Content $localfile 'linknew.live'
Add-Content $localfile 'mailnews.store'
Add-Content $localfile 'mailto.website'
Add-Content $localfile 'marketonline.one'
Add-Content $localfile 'messageapp.store'
Add-Content $localfile 'moneyme.site'
Add-Content $localfile 'newstoday.click'
Add-Content $localfile 'phishing.com.br'
Add-Content $localfile 'portalnoticias.cloud'
Add-Content $localfile 'privacydata.online'
Add-Content $localfile 'professionalcareer.one'
Add-Content $localfile 'salesstudio.live'
Add-Content $localfile 'securedevice.site'
Add-Content $localfile 'securityapp.cloud'
Add-Content $localfile 'sharesocial.online'
Add-Content $localfile 'socialtoday.xyz'
Add-Content $localfile 'techsol.click'
Add-Content $localfile 'techtips.one'
Add-Content $localfile 'travelforme.cloud'
Add-Content $localfile 'utilitiesonline.site'
Add-Content $localfile 'varejoonline.club'
Add-Content $localfile 'viagemagora.club'
Add-Content $localfile 'webportal.one'

### REGISTRY
## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa
# create path
New-Item 'HKCU:\Software\Policies\Microsoft\office\16.0\outlook\options\mail' -Force
New-Item 'HKCU:\Software\Microsoft\office\16.0\outlook\options\mail' -Force
# junkmailimportlists
New-ItemProperty 'HKCU:\Software\Policies\Microsoft\office\16.0\outlook\options\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force
New-ItemProperty 'HKCU:\Software\Microsoft\office\16.0\outlook\options\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force
# junkmailsafesendersfile
New-ItemProperty 'HKCU:\Software\Policies\Microsoft\office\16.0\outlook\options\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force
New-ItemProperty 'HKCU:\Software\Microsoft\office\16.0\outlook\options\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force

# STOP OUTLOOK
Stop-Process -Name "OUTLOOK" -Force -ErrorAction SilentlyContinue
# START OUTLOOK
Start-Process -FilePath "$Env:PROGRAMFILES\Microsoft Office\root\Office16\OUTLOOK.EXE" -ErrorAction SilentlyContinue

```

3. **Distribute the script** and run it once for **all users**.
