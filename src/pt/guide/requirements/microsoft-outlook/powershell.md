---
title: Powershell
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Powershell

## Resumo

1. **Atualize seu Registro do Windows** via script em Powershell.

## Configurações

1. **Identifique sua versão do Microsoft Office** e corrija as entradas para corresponder à sua versão.

   Opcionalmente, se você tiver mais de uma versão, crie configurações adicionais.

2. **Crie um script Powershell** com as novas configurações.

   Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.

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
Add-Content $localfile 'appcentral.info'
Add-Content $localfile 'apphub.lat'
Add-Content $localfile 'bizconnect.click'
Add-Content $localfile 'cloudconnect.cfd'
Add-Content $localfile 'datalink.lol'
Add-Content $localfile 'datasync.store'
Add-Content $localfile 'datatips.pro'
Add-Content $localfile 'devicecloud.life'
Add-Content $localfile 'deviceguard.pro'
Add-Content $localfile 'infoportal.live'
Add-Content $localfile 'linkhub.digital'
Add-Content $localfile 'mailvault.site'
Add-Content $localfile 'messagevault.store'
Add-Content $localfile 'newsbyte.click'
Add-Content $localfile 'newsflash.click'
Add-Content $localfile 'newslink.digital'
Add-Content $localfile 'onlineguide.one'
Add-Content $localfile 'privacyportal.store'
Add-Content $localfile 'privatemessage.cloud'
Add-Content $localfile 'privatemessage.lat'
Add-Content $localfile 'professionalhub.click'
Add-Content $localfile 'proopportunity.one'
Add-Content $localfile 'quicktips.site'
Add-Content $localfile 'securetech.lat'
Add-Content $localfile 'shopsmart.bond'
Add-Content $localfile 'smartdevice.live'
Add-Content $localfile 'technews.rest'
Add-Content $localfile 'techwave.pics'
Add-Content $localfile 'traveltips.quest'
Add-Content $localfile 'trendalert.store'
Add-Content $localfile 'businessuniversity.tech'
Add-Content $localfile 'trainingportal.me'
Add-Content $localfile 'cloudacademy.live'
Add-Content $localfile 'microlearning.academy'
Add-Content $localfile 'digitaleducation.digital'

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

3. **Distribua o script** e execute uma vez para **todos os usuários**.
