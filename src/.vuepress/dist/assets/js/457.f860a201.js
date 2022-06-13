(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{914:function(e,s,o){"use strict";o.r(s);var t=o(24),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"protecao-do-exchange-online"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protecao-do-exchange-online"}},[e._v("#")]),e._v(" Proteção do Exchange Online")]),e._v(" "),o("h2",{attrs:{id:"resumo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resumo"}},[e._v("#")]),e._v(" Resumo")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Configurar")]),e._v(" e "),o("strong",[e._v("implantar")]),e._v(" os domínios permitidos em suas caixas postais online.")])]),e._v(" "),o("h2",{attrs:{id:"configuracoes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[e._v("#")]),e._v(" Configurações")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Converse com seu time interno")]),e._v(" e "),o("strong",[e._v("escolha a melhor maneira")]),e._v(" de configurar sua "),o("strong",[e._v("Lista de Remetentes Confiáveis")]),e._v(" no EOP.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Criar listas de remetentes seguros no EOP"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Definir as configurações de lixo eletrônico nas caixas de correio do Exchange Online"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Instale")]),e._v(" os requisitos para executar os comandos via "),o("strong",[e._v("Powershell")]),e._v(".")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Install-PackageProvider -Name NuGet -Force\nInstall-Module -Name PowerShellGet -Force\nInstall-Module -Name ExchangeOnlineManagement -Scope CurrentUser\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[o("strong",[e._v("Conecte")]),e._v(" ao Exchange Online.")]),e._v(" "),o("p",[e._v("Utilize um usuário administrativo.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Set-ExecutionPolicy RemoteSigned\nImport-Module ExchangeOnlineManagement\nConnect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[o("strong",[e._v("Filtre")]),e._v(" os usuários de acordo com o escopo e onda de distribuição.")]),e._v(" "),o("p",[e._v("Para aplicar em todos os usuários.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited\n")])])]),o("p",[e._v("Para aplicar apenas em um grupo de usuários.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[o("p",[o("strong",[e._v("Configure")]),e._v(" os domínios que os usuários devem confiar em sua "),o("strong",[e._v("Lista de Remetentes Confiáveis")]),e._v(".")]),e._v(" "),o("p",[e._v("Defina os "),o("strong",[e._v("domínios")]),e._v(" que serão utilizados. "),o("RouterLink",{attrs:{to:"/pt/guide/requirements/domains.html#separada-por-espacos"}},[e._v("Domínios")])],1),e._v(" "),o("p",[e._v("Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","anbiental.com","appnews.cloud","appto.click","bankto.me","datagov.online","dealsnow.space","festivalnews.online","goonline.quest","govonline.click","linknew.live","mailnews.store","mailto.website","marketonline.one","messageapp.store","moneyme.site","newstoday.click","phishing.com.br","portalnoticias.cloud","privacydata.online","professionalcareer.one","salesstudio.live","securedevice.site","securityapp.cloud","sharesocial.online","socialtoday.xyz","techsol.click","techtips.one","travelforme.cloud","utilitiesonline.site","varejoonline.club","viagemagora.club","webportal.one"}}\n')])])]),o("ol",{attrs:{start:"5"}},[o("li",[o("p",[o("strong",[e._v("Valide")]),e._v(" os domínios de um usuário.")]),e._v(" "),o("p",[e._v("Utilize um usuário que recebeu as novas configurações.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*\n')])])]),o("p",[e._v("Opcionalmente confirme no Outlook do usuário.")]),e._v(" "),o("p",[e._v("Acessar "),o("strong",[e._v("Início")]),e._v(" -> "),o("strong",[e._v("Lixo Eletrônico")]),e._v(" -> "),o("strong",[e._v("Opções de Lixo Eletrônico")]),e._v(" -> "),o("strong",[e._v("Remetentes Confiáveis")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg",alt:"Microsoft Outlook"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);