(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{947:function(e,s,t){"use strict";t.r(s);var o=t(24),a=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"protecao-do-exchange-online"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protecao-do-exchange-online"}},[e._v("#")]),e._v(" Proteção do Exchange Online")]),e._v(" "),t("h2",{attrs:{id:"resumo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resumo"}},[e._v("#")]),e._v(" Resumo")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Configurar")]),e._v(" e "),t("strong",[e._v("implantar")]),e._v(" os domínios permitidos em suas caixas postais online.")])]),e._v(" "),t("h2",{attrs:{id:"configuracoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[e._v("#")]),e._v(" Configurações")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Converse com seu time interno")]),e._v(" e "),t("strong",[e._v("escolha a melhor maneira")]),e._v(" de configurar sua "),t("strong",[e._v("Lista de Remetentes Confiáveis")]),e._v(" no EOP.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Criar listas de remetentes seguros no EOP"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Definir as configurações de lixo eletrônico nas caixas de correio do Exchange Online"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Instale")]),e._v(" os requisitos para executar os comandos via "),t("strong",[e._v("Powershell")]),e._v(".")]),e._v(" "),t("p",[e._v("OBS: Powershell precisa ser atualizado.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Install-PackageProvider -Name NuGet -Force\nInstall-Module -Name PowerShellGet -Force\nInstall-Module -Name ExchangeOnlineManagement -Scope CurrentUser\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Conecte")]),e._v(" ao Exchange Online.")]),e._v(" "),t("p",[e._v("Utilize um usuário administrativo.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set-ExecutionPolicy RemoteSigned\nImport-Module ExchangeOnlineManagement\nConnect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Filtre")]),e._v(" os usuários de acordo com o escopo e onda de distribuição.")]),e._v(" "),t("p",[e._v("Para aplicar em todos os usuários.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited\n")])])]),t("p",[e._v("Para aplicar apenas em um grupo de usuários.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[t("strong",[e._v("Configure")]),e._v(" os domínios que os usuários devem confiar em sua "),t("strong",[e._v("Lista de Remetentes Confiáveis")]),e._v(".")]),e._v(" "),t("p",[e._v("Defina os "),t("strong",[e._v("domínios")]),e._v(" que serão utilizados. "),t("RouterLink",{attrs:{to:"/pt/guide/requirements/domains.html#separada-por-espacos"}},[e._v("Domínios")])],1),e._v(" "),t("p",[e._v("Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one","appcentral.info","apphub.lat","bizconnect.click","cloudconnect.cfd","datalink.lol","datasync.store","datatips.pro","devicecloud.life","deviceguard.pro","infoportal.live","linkhub.digital","mailvault.site","messagevault.store","newsbyte.click","newsflash.click","newslink.digital","onlineguide.one","privacyportal.store","privatemessage.cloud","privatemessage.lat","professionalhub.click","proopportunity.one","quicktips.site","securetech.lat","shopsmart.bond","smartdevice.live","technews.rest","techwave.pics","traveltips.quest","trendalert.store"}}\n')])])]),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[t("strong",[e._v("Valide")]),e._v(" os domínios de um usuário.")]),e._v(" "),t("p",[e._v("Utilize um usuário que recebeu as novas configurações.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*\n')])])]),t("p",[e._v("Opcionalmente confirme no Outlook do usuário.")]),e._v(" "),t("p",[e._v("Acessar "),t("strong",[e._v("Início")]),e._v(" -> "),t("strong",[e._v("Lixo Eletrônico")]),e._v(" -> "),t("strong",[e._v("Opções de Lixo Eletrônico")]),e._v(" -> "),t("strong",[e._v("Remetentes Confiáveis")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg",alt:"Microsoft Outlook"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);