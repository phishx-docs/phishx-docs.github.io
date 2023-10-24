(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{657:function(e,t,s){"use strict";s.r(t);var n=s(24),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"exchange-online-protection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exchange-online-protection"}},[e._v("#")]),e._v(" Exchange Online Protection")]),e._v(" "),s("h2",{attrs:{id:"tl-dr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[e._v("#")]),e._v(' TL","DR')]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("Configure")]),e._v(" and "),s("strong",[e._v("Deploy")]),e._v(" the allowed domains in your online mailboxes.")])]),e._v(" "),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("Talk to your internal team")]),e._v(" and "),s("strong",[e._v("choose the best way")]),e._v(" to set up your "),s("strong",[e._v("Trusted Senders List")]),e._v(" in EOP.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create safe sender lists in EOP"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure junk email settings on Exchange Online mailboxes"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Install")]),e._v(" the requirements to run commands via "),s("strong",[e._v("Powershell")]),e._v(".")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Install-PackageProvider -Name NuGet -Force\nInstall-Module -Name PowerShellGet -Force\nInstall-Module -Name ExchangeOnlineManagement -Scope CurrentUser\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("strong",[e._v("Connect")]),e._v(" to Exchange Online.")]),e._v(" "),s("p",[e._v("Use an administrative user.")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Set-ExecutionPolicy RemoteSigned\nImport-Module ExchangeOnlineManagement\nConnect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("strong",[e._v("Filter")]),e._v(" users according to scope and wave of distribution.")]),e._v(" "),s("p",[e._v("To apply to all users.")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited\n")])])]),s("p",[e._v("To apply only to a group of users.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[s("strong",[e._v("Configure")]),e._v(" the domains users should trust in your "),s("strong",[e._v("Trusted Senders List")]),e._v(".")]),e._v(" "),s("p",[e._v("Define the "),s("strong",[e._v("domains")]),e._v(" that will be used. "),s("RouterLink",{attrs:{to:"/en/guide/requirements/domains.html#separated-by-spaces"}},[e._v("Domains")])],1),e._v(" "),s("p",[e._v("Optionally add other internal and third-party domains to be trusted via the Safe Senders List.")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one"}}\n')])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[s("strong",[e._v("Validate")]),e._v(" a user's domains.")]),e._v(" "),s("p",[e._v("Use an user who received the new settings.")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*\n')])])]),s("p",[e._v("Optionally confirm in user's Outlook.")]),e._v(" "),s("p",[e._v("Go to "),s("strong",[e._v("Home")]),e._v(" -> "),s("strong",[e._v("Junk")]),e._v(" -> "),s("strong",[e._v("Junk E-mail Options")]),e._v(" -> "),s("strong",[e._v("Safe Senders")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg",alt:"Microsoft Outlook"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);