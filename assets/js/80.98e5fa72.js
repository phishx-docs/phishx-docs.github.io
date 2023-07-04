(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{536:function(s,t,o){"use strict";o.r(t);var i=o(24),e=Object(i.a)({},(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"sincronizacao-de-contatos-da-microsoft-azure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sincronizacao-de-contatos-da-microsoft-azure"}},[s._v("#")]),s._v(" Sincronização de Contatos da Microsoft - Azure")]),s._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[s._v("Configuração simplificada via Powershell")]),s._v(" "),o("p",[s._v("As configurações de registro de aplicações são mais fáceis através de comandos em Powershell.")])]),s._v(" "),o("h2",{attrs:{id:"configuracoes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[s._v("#")]),s._v(" Configurações")]),s._v(" "),o("ol",[o("li",[o("p",[o("strong",[s._v("Registrar um novo aplicativo")]),s._v(" em: "),o("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"}},[s._v("App registrations"),o("OutboundLink")],1),s._v(".")]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("New registration")]),s._v(".")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_201.png",alt:"Microsoft Sync"}})])]),s._v(" "),o("li",[o("p",[s._v("Configurar o novo aplicativo.")]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Name")]),s._v(", inserir: "),o("strong",[s._v("PhishX - Azure Contacts Integration - 2023")])]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Supported account types")]),s._v(", escolher de acordo com a sua organização: "),o("strong",[s._v("Accounts in this organizational directory only (phishxmsdev only - Single tenant)")])]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Redirect URI (optional)")]),s._v(", escolher o tipo "),o("strong",[s._v("Web")]),s._v(" e inserir a url "),o("strong",[s._v("https://auth.phishx.io/live/en/microsoftgraph")])]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("Register")]),s._v(".")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_202.png",alt:"Microsoft Sync"}})])]),s._v(" "),o("li",[o("p",[s._v("Acessar "),o("strong",[s._v("API permissions")]),s._v(".")]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("Add a permission")]),s._v(".")]),s._v(" "),o("p",[s._v("Selecionar "),o("strong",[s._v("Microsoft Graph")]),s._v(".")]),s._v(" "),o("p",[s._v("Selecionar "),o("strong",[s._v("Application permissions")]),s._v(".")]),s._v(" "),o("p",[s._v("Adicionar as seguintes permissões.")])])]),s._v(" "),o("br"),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("User.Read\nUser.Read.All\nGroup.Read.All\nApplication.Read.All\n")])])]),o("p",[s._v("Clicar em "),o("strong",[s._v("Add a permission")]),s._v(".")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_203.png",alt:"Microsoft Sync"}})]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_204.png",alt:"Microsoft Sync"}})]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_205.png",alt:"Microsoft Sync"}})]),s._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[o("p",[s._v("Acessar "),o("strong",[s._v("Certificates & secrets")]),s._v(".")]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("Client Secrets")]),s._v(".")]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("New Client Secret")]),s._v(".")]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Description")]),s._v(", inserir: "),o("strong",[s._v("PhishX-Azure-Contacts-2023")])]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Expires")]),s._v(", selecionar "),o("strong",[s._v("730 days (24 months)")]),s._v(".")]),s._v(" "),o("p",[s._v("Clicar em "),o("strong",[s._v("Add")]),s._v(".")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_206.png",alt:"Microsoft Sync"}})]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_207.png",alt:"Microsoft Sync"}})]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_208.png",alt:"Microsoft Sync"}})])]),s._v(" "),o("li",[o("p",[o("strong",[s._v("Montar sua URL")]),s._v(" de consentimento.")]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Overview")]),s._v(", copie o "),o("strong",[s._v("TENANT_ID")]),s._v(" em "),o("strong",[s._v("Directory (tenant) ID")]),s._v(".")]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Overview")]),s._v(", copie o "),o("strong",[s._v("CLIENT_ID")]),s._v(" em "),o("strong",[s._v("Application (client) ID")]),s._v(".")]),s._v(" "),o("p",[s._v("Em "),o("strong",[s._v("Overview")]),s._v(", copie o "),o("strong",[s._v("OBJECT_ID")]),s._v(" em "),o("strong",[s._v("Object ID")]),s._v(".")]),s._v(" "),o("p",[s._v("Copie o "),o("strong",[s._v("TENANT_NAME")]),s._v(" com o nome do seu "),o("strong",[s._v("tenant")]),s._v('. Ex: "phishxmsdev"')]),s._v(" "),o("p",[s._v("Copie o "),o("strong",[s._v("TENANT_DOMAIN")]),s._v(" com o domínio principal do seu "),o("strong",[s._v("tenant")]),s._v('. Ex: "phishxmsdev.onmicrosoft.com"')]),s._v(" "),o("p",[s._v("Utilize o seu "),o("strong",[s._v("Sudomínio PhishX")]),s._v(".")]),s._v(" "),o("p",[s._v("Crie o seu "),o("strong",[s._v("STATE")]),s._v(" no seguinte formato:")])])]),s._v(" "),o("br"),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("{PHISHX_SUBDOMAIN}|{CLIENT_ID}|{OBJECT_ID}|{CLIENT_SECRET}|{TENANT_ID}|{TENANT_NAME}|{TENANT_DOMAIN}\n")])])]),o("p",[s._v("Crie a sua "),o("strong",[s._v("REDIRECT_URL")]),s._v(" no seguinte formato:")]),s._v(" "),o("br"),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("https://auth.phishx.io/live/en/microsoftgraph\n")])])]),o("br"),s._v(" "),o("p",[s._v("Crie a sua "),o("strong",[s._v("URL de Consentimento")]),s._v(" no seguinte formato:")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("https://login.microsoftonline.com/{TENANT_ID}/adminconsent?client_id={CLIENT_ID}&state={STATE}&redirect_uri={REDIRECT_URL}\n")])])]),o("p",[s._v("Sua URL deve ficar similar ao exemplo a seguir:")]),s._v(" "),o("br"),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("https://login.microsoftonline.com/bcb53ee9-0c7c-4768-86ea-3f033ae213b7/adminconsent?client_id=63c62ddc-8a44-45f2-8ec9-7df446d3dd9f&state=phishx|63c62ddc-8a44-45f2-8ec9-7df446d3dd9f|a0a3cc0f-5351-4a38-892e-d8842698fc6c|4aG8Q~j-NB4D6hlxu7s3tppxjKxHgEUDOR3ZfaB7|bcb53ee9-0c7c-4768-86ea-3f033ae213b7|phishxmsdev|phishxmsdev.onmicrosoft.com&redirect_uri=https://auth.phishx.io/live/en/microsoftgraph\n")])])]),o("ol",{attrs:{start:"6"}},[o("li",[o("p",[s._v("Conceda o "),o("strong",[s._v("consentimento")]),s._v(" através do link gerado.")]),s._v(" "),o("p",[s._v("Acessar o link e clicar em "),o("strong",[s._v("Aceitar")]),s._v(".")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_008.png",alt:"Microsoft Sync"}})])]),s._v(" "),o("li",[o("p",[s._v("Visualize as "),o("strong",[s._v("configurações")]),s._v(" em: "),o("a",{attrs:{href:"settings"}},[s._v("Configurações")]),s._v(".")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);