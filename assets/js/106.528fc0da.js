(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{392:function(t,e,n){"use strict";n.r(e);var s=n(8),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sincronizacao-de-contatos-da-microsoft-powershell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sincronizacao-de-contatos-da-microsoft-powershell"}},[t._v("#")]),t._v(" Sincronização de Contatos da Microsoft - Powershell")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Você pode fazer o download ou copiar os scripts")]),t._v(" "),e("p",[t._v("Para facilitar, você pode fazer o download dos scripts em "),e("a",{attrs:{href:"https://cdn.phishx.io/phishx-docs/microsoft_sync.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scripts Powershell"),e("OutboundLink")],1),t._v(", ou copiar os comandos e executar através de arquivos similares dentro do seu ambiente.")])]),t._v(" "),e("h2",{attrs:{id:"configuracoes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[t._v("#")]),t._v(" Configurações")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("Configure as suas informações")]),t._v(" em um arquivo "),e("strong",[t._v("settings.json")]),t._v(".")]),t._v(" "),e("p",[t._v("Altere o seu subdomínio e o seu domínio principal.")])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n"TenantJSONFile": "tenant.json",\n"APPJSONFile": "app.json",\n"MAINDOMAIN": "phishxnew.onmicrosoft.com",\n"SECRETJSONfile": "appsecret.json",\n"PhishXSubdomain": "phishx",\n"appName": "PhishX - Contacts Integration - 2024",\n"appKey": "PhishX-Contacts-2024",\n"appHomePageUrl": "https://www.phishx.io/"\n}\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_000.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Instalar os "),e("strong",[t._v("módulos do Powershell")]),t._v(" como administrador local.")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\nWrite-Output "Installing Modules"\nWrite-Output "Installing Azure AD Module"\nInstall-Module -Name AzureAD -Force\nWrite-Output "Installing Azure Resource Manager Module"\nInstall-Module -Name Az.Resources -Force\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_001.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("Autenticar em seu Tenant")]),t._v(" como administrador.")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n# LOGIN\nWrite-Output "Verify Azure AD Connection"\ntry {\n   Get-AzureADTenantDetail\n   Write-Host "You\'re connected."\n}\ncatch [Microsoft.Open.Azure.AD.CommonLibrary.AadNeedAuthenticationException]\n{\n   Write-Host "You\'re not connected.";\n   Write-Output "Connecting to Azure AD"\n\tConnect-AzAccount -AuthScope MicrosoftGraphEndpointResourceId\n\tConnect-AzureAD\n}\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_002.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Obter configurações do seu "),e("strong",[t._v("Tenant")]),t._v(".")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n$settingsfile = "settings.json"\n$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json\n$TenantJSONFile = $settings.TenantJSONFile\nWrite-Output "Tenant Information"\n$tenant = Get-AzureADTenantDetail\n$data = [pscustomobject] @{\ndomain = $tenant.VerifiedDomains.Name\nid = $tenant.ObjectId\nname = $tenant.DisplayName\n}\n$data | ConvertTo-Json -Compress | Out-File $TenantJSONFile\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_003.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Registre sua "),e("strong",[t._v("Aplicação")]),t._v(".")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n$settingsfile = "settings.json"\n$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json\n$TenantJSONFile = $settings.TenantJSONFile\n$tenant = Get-Content -Raw $TenantJSONFile | ConvertFrom-Json\n$appName = $settings.appName + "-" + $settings.random\n$appURI = "https://" + $settings.PhishXSubdomain + "." + $settings.MAINDOMAIN\n$appHomePageUrl = $settings.appHomePageUrl\n$appReplyURLs = @("https://" + $settings.PhishXSubdomain + ".phishx.io/live/en/microsoftgraph")\nWrite-Output "App Registration"\n# Write-Output $settings\n$OutputName = "Name: " + $appName\nWrite-Output $OutputName\n$OutputURI = "URI: " + $appURI\nWrite-Output $OutputURI\nif(!($myApp = Get-AzureADApplication -Filter "IdentifierUris eq \'$($appURI)\'" -ErrorAction SilentlyContinue))\n{\n  $myApp = New-AzureADApplication -DisplayName $appName -IdentifierUris $appURI -Homepage $appHomePageUrl -ReplyUrls $appReplyURLs\n}\n$data = [pscustomobject] @{\n  AppId = $myApp.AppId\n  ObjectId = $myApp.ObjectId\n  name = $myApp.DisplayName\n}\n$APPJSONFile = $settings.APPJSONFile\n$data | ConvertTo-Json -Compress | Out-File $APPJSONFile\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_004.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Registre seu "),e("strong",[t._v("Segredo da Aplicação")]),t._v(".")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n$settingsfile = "settings.json"\n$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json\n$appfile = $settings.APPJSONFile\n$app = Get-Content -Raw $appfile | ConvertFrom-Json\n$AppObjId = $app.ObjectId\n$KeyName = $settings.appKey\n$startDate = Get-Date\n$endDate = $startDate.AddYears(2)\n$secretfile = $settings.SECRETJSONfile\nWrite-Output "App Secret Registration"\nNew-AzureADApplicationPasswordCredential -ObjectId $AppObjId -CustomKeyIdentifier $KeyName -StartDate $startDate -EndDate $endDate  | ConvertTo-Json -Compress | Out-File $secretfile\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_005.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Adicione as "),e("strong",[t._v("Permissões")]),t._v(".")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n$settingsfile = "settings.json"\n$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json\n$appfile = $settings.APPJSONFile\n$app = Get-Content -Raw $appfile | ConvertFrom-Json\n$apiId = "00000003-0000-0000-c000-000000000000"\nWrite-Output "App Permissions"\nWrite-Output "Adding Permission: Application.Read.All"\nAdd-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "9a5d68dd-52b0-4cc2-bd40-abcf44ac3a30" -ErrorAction SilentlyContinue -Type Role\nWrite-Output "Adding Permission: Group.Read.All"\nAdd-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "5b567255-7703-4780-807c-7be8301ae99b" -ErrorAction SilentlyContinue -Type Role\nWrite-Output "Adding Permission: User.Read"\nAdd-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "e1fe6dd8-ba31-4d61-89e7-88639da4683d" -ErrorAction SilentlyContinue\nWrite-Output "Adding Permission: User.Read.All"\nAdd-AzADAppPermission -ObjectId $app.ObjectId -ApiId $apiId -PermissionId "df021288-bdef-4463-88db-98f22de89214" -ErrorAction SilentlyContinue -Type Role\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_006.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v("Conceda o "),e("strong",[t._v("consentimento")]),t._v(" através do link gerado.")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Write-Output "-------------------------------"\n$settingsfile = "settings.json"\n$settings = Get-Content -Raw $settingsfile | ConvertFrom-Json\n$subdomain = $settings.PhishXSubdomain\n$TenantJSONFile = $settings.TenantJSONFile\n$tenantobj = Get-Content -Raw $TenantJSONFile | ConvertFrom-Json\n$tenant = $tenantobj.id\n$tenantname = $tenantobj.name\n$tenantdomain = $settings.MAINDOMAIN\n$appfile = $settings.APPJSONFile\n$app = Get-Content -Raw $appfile | ConvertFrom-Json\n$client_id = $app.AppId\n$object_id = $app.ObjectId\n$secretfile = $settings.SECRETJSONfile\n$secret = Get-Content -Raw $secretfile | ConvertFrom-Json\n$client_secret = $secret.Value\n$urlstate = $subdomain + "|" + $client_id + "|" + $object_id + "|" + $client_secret + "|" + $tenant + "|" + $tenantname + "|" + $tenantdomain\n$urlstateencoded = [System.Web.HttpUtility]::UrlEncode($urlstate)\n$urlredirect = "https://" + $subdomain + ".phishx.io/live/en/microsoftgraph"\n$url = "https://login.microsoftonline.com/" + $tenant + "/adminconsent?client_id=" + $client_id + "&state=" + $urlstateencoded + "&redirect_uri=" + $urlredirect\nWrite-Output "-------------------------------"\nWrite-Output "Admin Consent URL:"\n$url | Write-Output\nWrite-Output "-------------------------------"\nWrite-Output "Admin Console URL:"\n$consoleurl = "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/CallAnAPI/appId/" + $app.AppId + "/isMSAApp~/false"\n$consoleurl | Write-Output\nWrite-Output "-------------------------------"\nWrite-Output "subdomain: $subdomain"\nWrite-Output "tenant_id: $tenant"\nWrite-Output "tenant_name: $tenantname"\nWrite-Output "tenant_domain: $tenantdomain"\nWrite-Output "client_id: $client_id"\nWrite-Output "object_id: $object_id"\nWrite-Output "Secret Value: $client_secret"\nWrite-Output "-------------------------------"\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_007.png",alt:"Microsoft Sync"}})]),t._v(" "),e("p",[t._v("Acessar o link e clicar em "),e("strong",[t._v("Aceitar")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_008.png",alt:"Microsoft Sync"}})]),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Visualize as "),e("strong",[t._v("configurações")]),t._v(" em: "),e("a",{attrs:{href:"settings"}},[t._v("Configurações")]),t._v(".")])])])}),[],!1,null,null,null);e.default=i.exports}}]);