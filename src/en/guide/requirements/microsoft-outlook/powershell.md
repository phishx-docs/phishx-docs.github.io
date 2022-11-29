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
Add-Content $localfile 'appstudio.shop'
Add-Content $localfile 'banknow.cloud'
Add-Content $localfile 'datagov.click'
Add-Content $localfile 'dealsnews.club'
Add-Content $localfile 'festivalnews.online'
Add-Content $localfile 'goonline.help'
Add-Content $localfile 'linkdata.live'
Add-Content $localfile 'mailnews.store'
Add-Content $localfile 'mailto.site'
Add-Content $localfile 'marketonline.one'
Add-Content $localfile 'messageapp.store'
Add-Content $localfile 'newstoday.click'
Add-Content $localfile 'peoplex.io'
Add-Content $localfile 'phishing.com.br'
Add-Content $localfile 'privacynow.click'
Add-Content $localfile 'professionalopportunity.store'
Add-Content $localfile 'securedevice.site'
Add-Content $localfile 'securityapp.cloud'
Add-Content $localfile 'sharemessages.online'
Add-Content $localfile 'techsol.click'
Add-Content $localfile 'techtips.one'
Add-Content $localfile 'techtips.shop'
Add-Content $localfile 'travelforme.cloud'
Add-Content $localfile 'varejoonline.club'
Add-Content $localfile 'viagemagora.xyz'
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
