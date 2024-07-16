(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{749:function(s,t,o){"use strict";o.r(t);var i=o(8),r=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sincronizacao-de-contatos-da-microsoft-azure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sincronizacao-de-contatos-da-microsoft-azure"}},[s._v("#")]),s._v(" Sincronização de Contatos da Microsoft - Azure")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Configuração simplificada via Powershell")]),s._v(" "),t("p",[s._v("As configurações de registro de aplicações são mais fáceis através de comandos em Powershell.")])]),s._v(" "),t("h2",{attrs:{id:"configuracoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[s._v("#")]),s._v(" Configurações")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("Registrar um novo aplicativo")]),s._v(" em: "),t("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"}},[s._v("App registrations"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("New registration")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_201.png",alt:"Microsoft Sync"}})])]),s._v(" "),t("li",[t("p",[s._v("Configurar o novo aplicativo.")]),s._v(" "),t("p",[s._v("Em "),t("strong",[s._v("Name")]),s._v(", inserir: "),t("strong",[s._v("PhishX - Azure Contacts Integration - 2024")])]),s._v(" "),t("p",[s._v("Em "),t("strong",[s._v("Supported account types")]),s._v(", escolher de acordo com a sua organização: "),t("strong",[s._v("Accounts in this organizational directory only (phishxmsdev only - Single tenant)")])]),s._v(" "),t("p",[s._v("Em "),t("strong",[s._v("Redirect URI (optional)")]),s._v(", escolher o tipo "),t("strong",[s._v("Web")]),s._v(" e inserir a url com o seu subdomínio: "),t("strong",[s._v("https://{subdomain}.phishx.io/live/en/microsoftgraph")])]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("Register")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_202.png",alt:"Microsoft Sync"}})])]),s._v(" "),t("li",[t("p",[s._v("Acessar "),t("strong",[s._v("API permissions")]),s._v(".")]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("Add a permission")]),s._v(".")]),s._v(" "),t("p",[s._v("Selecionar "),t("strong",[s._v("Microsoft Graph")]),s._v(".")]),s._v(" "),t("p",[s._v("Selecionar "),t("strong",[s._v("Application permissions")]),s._v(".")]),s._v(" "),t("p",[s._v("Adicionar as seguintes permissões.")])])]),s._v(" "),t("br"),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("User.Read\nUser.Read.All\nGroup.Read.All\nApplication.Read.All\n")])])]),t("p",[s._v("Clicar em "),t("strong",[s._v("Add a permission")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_203.png",alt:"Microsoft Sync"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_204.png",alt:"Microsoft Sync"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_205.png",alt:"Microsoft Sync"}})]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[s._v("Acessar "),t("strong",[s._v("Certificates & secrets")]),s._v(".")]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("Client Secrets")]),s._v(".")]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("New Client Secret")]),s._v(".")]),s._v(" "),t("p",[s._v("Em "),t("strong",[s._v("Description")]),s._v(", inserir: "),t("strong",[s._v("PhishX-Azure-Contacts-2023")])]),s._v(" "),t("p",[s._v("Em "),t("strong",[s._v("Expires")]),s._v(", selecionar "),t("strong",[s._v("730 days (24 months)")]),s._v(".")]),s._v(" "),t("p",[s._v("Clicar em "),t("strong",[s._v("Add")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_206.png",alt:"Microsoft Sync"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_207.png",alt:"Microsoft Sync"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/microsoft_sync_208.png",alt:"Microsoft Sync"}})]),s._v(" "),t("p",[s._v("Copiar o "),t("strong",[s._v("Value")]),s._v(" do segredo.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("**Secret Value**: Rt78Q~d3bwAdgiOJUPYFeFRv_...\n")])])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Montar sua URL")]),s._v(" de consentimento em: "),t("RouterLink",{attrs:{to:"/pt/guide/integrations/microsoft-sync/helper/"}},[s._v("Assistente para Consentimento da PhishX")]),s._v(".")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);