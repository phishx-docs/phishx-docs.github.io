(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{763:function(e,s,t){"use strict";t.r(s);var a=t(24),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"exchange-online-protection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange-online-protection"}},[e._v("#")]),e._v(" Exchange Online Protection")]),e._v(" "),t("h2",{attrs:{id:"resumen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resumen"}},[e._v("#")]),e._v(" Resumen")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Configure")]),e._v(" e "),t("strong",[e._v("Implemente")]),e._v(" los dominios permitidos en sus buzones de correo en línea.")])]),e._v(" "),t("h2",{attrs:{id:"configuraciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuraciones"}},[e._v("#")]),e._v(" Configuraciones")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Habla con tu equipo interno")]),e._v(" y "),t("strong",[e._v("elige la mejor manera")]),e._v(" de configurar tu "),t("strong",[e._v("Lista de remitentes confiables")]),e._v(" en EOP.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crear listas de remitentes seguros en EOP"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configurar las opciones del correo no deseado en buzones de Exchange Online"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Instale")]),e._v(" los requisitos para ejecutar comandos a través de "),t("strong",[e._v("Powershell")]),e._v(".")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Install-PackageProvider -Name NuGet -Force\nInstall-Module -Name PowerShellGet -Force\nInstall-Module -Name ExchangeOnlineManagement -Scope CurrentUser\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Conéctese")]),e._v(" a Exchange Online.")]),e._v(" "),t("p",[e._v("Utilice un usuario administrativo.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set-ExecutionPolicy RemoteSigned\nImport-Module ExchangeOnlineManagement\nConnect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Filtra")]),e._v(" usuarios según alcance y ola de distribución.")]),e._v(" "),t("p",[e._v("Aplicar a todos los usuarios.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited\n")])])]),t("p",[e._v("Aplicar solo a un grupo de usuarios.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[t("strong",[e._v("Configure")]),e._v(" los dominios en los que los usuarios deben confiar en su "),t("strong",[e._v("Lista de remitentes confiables")]),e._v(".")]),e._v(" "),t("p",[e._v("Defina los "),t("strong",[e._v("dominios")]),e._v(" que se utilizarán. "),t("RouterLink",{attrs:{to:"/es/guide/requirements/domains.html#separado-por-espacios"}},[e._v("Dominios")])],1),e._v(" "),t("p",[e._v("Opcionalmente, agregue otros dominios internos y de terceros en los que confiar a través de la Lista de remitentes seguros.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io,phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one"}}\n')])])]),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[t("strong",[e._v("Validar")]),e._v(" los dominios de un usuario.")]),e._v(" "),t("p",[e._v("Utilice un usuario que haya recibido la nueva configuración.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*\n')])])]),t("p",[e._v("Opcionalmente, confirme en Outlook del usuario.")]),e._v(" "),t("p",[e._v("Acceder "),t("strong",[e._v("Inicio")]),e._v(" -> "),t("strong",[e._v("Basura Electrónica")]),e._v(" -> "),t("strong",[e._v("Opciones de Basura Electrónica")]),e._v(" -> "),t("strong",[e._v("Remitentes Confiabless")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg",alt:"Microsoft Outlook"}})])])}),[],!1,null,null,null);s.default=o.exports}}]);