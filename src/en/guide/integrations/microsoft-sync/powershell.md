---
title: Microsoft Sync - Powershell
tags:
  - Integrações
  - Microsoft
  - Azure
  - AD
  - 365
---

# Sincronização de Contatos da Microsoft - Powershell

::: tip Você pode fazer o download ou copiar os scripts
Para facilitar, você pode fazer o download dos scripts em [Scripts Powershell](https://cdn.phishx.io/phishx-docs/microsoft_sync.zip), ou copiar os comandos e executar através de arquivos similares dentro do seu ambiente.
:::

## Configurações

1. **Configure as suas informações** em um arquivo **settings.json**.

   Altere o seu subdomínio e o seu domínio principal.

<br>

```
{
"TenantJSONFile": "tenant.json",
"APPJSONFile": "app.json",
"MAINDOMAIN": "phishxnew.onmicrosoft.com",
"SECRETJSONfile": "appsecret.json",
"PhishXSubdomain": "phishx",
"appName": "PhishX - Contacts Integration - 2024",
"appKey": "PhishX-Contacts-2024",
"appHomePageUrl": "https://www.phishx.io/"
}
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_000.png)

2. Instalar os **módulos do Powershell** como administrador local.

<br>

```
Write-Output "-------------------------------"
Write-Output "Installing Modules"
Write-Output "Installing Azure AD Module"
Install-Module -Name AzureAD -Force
Write-Output "Installing Azure Resource Manager Module"
Install-Module -Name Az.Resources -Force
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_001.png)

3. **Autenticar em seu Tenant** como administrador.

<br>

```
Write-Output "-------------------------------"
# LOGIN
Write-Output "Verify Azure AD Connection"
try {
   Get-AzureADTenantDetail
   Write-Host "You're connected."
}
catch [Microsoft.Open.Azure.AD.CommonLibrary.AadNeedAuthenticationException]
{
   Write-Host "You're not connected.";
   Write-Output "Connecting to Azure AD"
	Connect-AzAccount -AuthScope MicrosoftGraphEndpointResourceId
	Connect-AzureAD
}
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_002.png)

4. Obter configurações do seu **Tenant**.

<br>

```
Write-Output "-------------------------------"
$settingsfile = "settings.json"
$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json
$TenantJSONFile = $settings.TenantJSONFile
Write-Output "Tenant Information"
$tenant = Get-AzureADTenantDetail
$data = [pscustomobject] @{
domain = $tenant.VerifiedDomains.Name
id = $tenant.ObjectId
name = $tenant.DisplayName
}
$data | ConvertTo-Json -Compress | Out-File $TenantJSONFile
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_003.png)

5. Registre sua **Aplicação**.

<br>

```
Write-Output "-------------------------------"
$settingsfile = "settings.json"
$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json
$TenantJSONFile = $settings.TenantJSONFile
$tenant = Get-Content -Raw $TenantJSONFile | ConvertFrom-Json
$appName = $settings.appName + "-" + $settings.random
$appURI = "https://" + $settings.PhishXSubdomain + "." + $settings.MAINDOMAIN
$appHomePageUrl = $settings.appHomePageUrl
$appReplyURLs = @("https://" + $settings.PhishXSubdomain + ".phishx.io/live/en/microsoftgraph")
Write-Output "App Registration"
# Write-Output $settings
$OutputName = "Name: " + $appName
Write-Output $OutputName
$OutputURI = "URI: " + $appURI
Write-Output $OutputURI
if(!($myApp = Get-AzureADApplication -Filter "IdentifierUris eq '$($appURI)'" -ErrorAction SilentlyContinue))
{
  $myApp = New-AzureADApplication -DisplayName $appName -IdentifierUris $appURI -Homepage $appHomePageUrl -ReplyUrls $appReplyURLs
}
$data = [pscustomobject] @{
  AppId = $myApp.AppId
  ObjectId = $myApp.ObjectId
  name = $myApp.DisplayName
}
$APPJSONFile = $settings.APPJSONFile
$data | ConvertTo-Json -Compress | Out-File $APPJSONFile
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_004.png)

6. Registre seu **Segredo da Aplicação**.

<br>

```
Write-Output "-------------------------------"
$settingsfile = "settings.json"
$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json
$appfile = $settings.APPJSONFile
$app = Get-Content -Raw $appfile | ConvertFrom-Json
$AppObjId = $app.ObjectId
$KeyName = $settings.appKey
$startDate = Get-Date
$endDate = $startDate.AddYears(2)
$secretfile = $settings.SECRETJSONfile
Write-Output "App Secret Registration"
New-AzureADApplicationPasswordCredential -ObjectId $AppObjId -CustomKeyIdentifier $KeyName -StartDate $startDate -EndDate $endDate  | ConvertTo-Json -Compress | Out-File $secretfile
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_005.png)

7. Adicione as **Permissões**.

<br>

```
Write-Output "-------------------------------"
$settingsfile = "settings.json"
$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json
$appfile = $settings.APPJSONFile
$app = Get-Content -Raw $appfile | ConvertFrom-Json
$apiId = "00000003-0000-0000-c000-000000000000"
Write-Output "App Permissions"
Write-Output "Adding Permission: Application.Read.All"
Add-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "9a5d68dd-52b0-4cc2-bd40-abcf44ac3a30" -ErrorAction SilentlyContinue -Type Role
Write-Output "Adding Permission: Group.Read.All"
Add-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "5b567255-7703-4780-807c-7be8301ae99b" -ErrorAction SilentlyContinue -Type Role
Write-Output "Adding Permission: User.Read"
Add-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "e1fe6dd8-ba31-4d61-89e7-88639da4683d" -ErrorAction SilentlyContinue
Write-Output "Adding Permission: User.Read.All"
Add-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "df021288-bdef-4463-88db-98f22de89214" -ErrorAction SilentlyContinue -Type Role
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_006.png)

8. Conceda o **consentimento** através do link gerado.

<br>

```
Write-Output "-------------------------------"
$settingsfile = "settings.json"
$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json
$subdomain = $settings.PhishXSubdomain
$TenantJSONFile = $settings.TenantJSONFile
$tenantobj = Get-Content -Raw $TenantJSONFile | ConvertFrom-Json
$tenant = $tenantobj.id
$tenantname = $tenantobj.name
$tenantdomain = $settings.MAINDOMAIN
$appfile = $settings.APPJSONFile
$app = Get-Content -Raw $appfile | ConvertFrom-Json
$client_id = $app.AppId
$object_id = $app.ObjectId
$secretfile = $settings.SECRETJSONfile
$secret = Get-Content -Raw $secretfile | ConvertFrom-Json
$client_secret = $secret.Value
$urlstate = $subdomain + "|" + $client_id + "|" + $object_id + "|" + $client_secret + "|" + $tenant + "|" + $tenantname + "|" + $tenantdomain
$urlstateencoded = [System.Web.HttpUtility]::UrlEncode($urlstate)
$urlredirect = "https://" + $subdomain + ".phishx.io/live/en/microsoftgraph"
$url = "https://login.microsoftonline.com/" + $tenant + "/adminconsent?client_id=" + $client_id + "&state=" + $urlstateencoded + "&redirect_uri=" + $urlredirect
Write-Output "-------------------------------"
Write-Output "Admin Consent URL:"
$url | Write-Output
Write-Output "-------------------------------"
Write-Output "Admin Console URL:"
$consoleurl = "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/CallAnAPI/appId/" + $app.AppId + "/isMSAApp~/false"
$consoleurl | Write-Output
Write-Output "-------------------------------"
Write-Output "subdomain: $subdomain"
Write-Output "tenant_id: $tenant"
Write-Output "tenant_name: $tenantname"
Write-Output "tenant_domain: $tenantdomain"
Write-Output "client_id: $client_id"
Write-Output "object_id: $object_id"
Write-Output "Secret Value: $client_secret"
Write-Output "-------------------------------"
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_007.png)

Acessar o link e clicar em **Aceitar**.

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_008.png)

9. Visualize as **configurações** em: [Configurações](settings).
