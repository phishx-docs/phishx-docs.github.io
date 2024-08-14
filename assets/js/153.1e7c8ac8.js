(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{438:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"exchange-online-protection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange-online-protection"}},[e._v("#")]),e._v(" Exchange Online Protection")]),e._v(" "),t("h2",{attrs:{id:"tl-dr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[e._v("#")]),e._v(' TL","DR')]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Configure")]),e._v(" and "),t("strong",[e._v("Deploy")]),e._v(" the allowed domains in your online mailboxes.")])]),e._v(" "),t("h2",{attrs:{id:"settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Talk to your internal team")]),e._v(" and "),t("strong",[e._v("choose the best way")]),e._v(" to set up your "),t("strong",[e._v("Trusted Senders List")]),e._v(" in EOP.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/create-safe-sender-lists-in-office-365?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create safe sender lists in EOP"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure junk email settings on Exchange Online mailboxes"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Install")]),e._v(" the requirements to run commands via "),t("strong",[e._v("Powershell")]),e._v(".")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Install-PackageProvider -Name NuGet -Force\nInstall-Module -Name PowerShellGet -Force\nInstall-Module -Name ExchangeOnlineManagement -Scope CurrentUser\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Connect")]),e._v(" to Exchange Online.")]),e._v(" "),t("p",[e._v("Use an administrative user.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set-ExecutionPolicy RemoteSigned\nImport-Module ExchangeOnlineManagement\nConnect-ExchangeOnline -UserPrincipalName <ADMIN@DOMAIN.COM>\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("strong",[e._v("Filter")]),e._v(" users according to scope and wave of distribution.")]),e._v(" "),t("p",[e._v("To apply to all users.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited\n")])])]),t("p",[e._v("To apply only to a group of users.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$All = Get-UnifiedGroupLinks -Identity '<GROUP>' -LinkType Members -ResultSize Unlimited\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[t("strong",[e._v("Configure")]),e._v(" the domains users should trust in your "),t("strong",[e._v("Trusted Senders List")]),e._v(".")]),e._v(" "),t("p",[e._v("Define the "),t("strong",[e._v("domains")]),e._v(" that will be used. "),t("RouterLink",{attrs:{to:"/en/guide/requirements/domains.html#separated-by-spaces"}},[e._v("Domains")])],1),e._v(" "),t("p",[e._v("Optionally add other internal and third-party domains to be trusted via the Safe Senders List.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$All | foreach {Set-MailboxJunkEmailConfiguration $_.Name -ErrorAction SilentlyContinue -TrustedSendersAndDomains @{Add="phishx.io","phishx.com","appstudio.shop","banknow.cloud","datagov.click","dealsnews.club","festivalnews.online","goonline.help","linkdata.live","mailnews.store","mailto.site","marketonline.one","messageapp.store","newstoday.click","peoplex.io","phishing.com.br","phishx.com","phishx.com.br","phishx.io","privacynow.click","professionalopportunity.store","securedevice.site","securityapp.cloud","sharemessages.online","techtips.one","techtips.shop","travelforme.cloud","varejoonline.club","viagemagora.xyz","webportal.one","appcentral.info","apphub.lat","bizconnect.click","cloudconnect.cfd","datalink.lol","datasync.store","datatips.pro","devicecloud.life","deviceguard.pro","infoportal.live","linkhub.digital","mailvault.site","messagevault.store","newsbyte.click","newsflash.click","newslink.digital","onlineguide.one","privacyportal.store","privatemessage.cloud","privatemessage.lat","professionalhub.click","proopportunity.one","quicktips.site","securetech.lat","shopsmart.bond","smartdevice.live","technews.rest","techwave.pics","traveltips.quest","trendalert.store"}}\n')])])]),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[t("strong",[e._v("Validate")]),e._v(" a user's domains.")]),e._v(" "),t("p",[e._v("Use an user who received the new settings.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Get-MailboxJunkEmailConfiguration -Identity "<MAILBOXIDENTITY>" | Format-List trusted*\n')])])]),t("p",[e._v("Optionally confirm in user's Outlook.")]),e._v(" "),t("p",[e._v("Go to "),t("strong",[e._v("Home")]),e._v(" -> "),t("strong",[e._v("Junk")]),e._v(" -> "),t("strong",[e._v("Junk E-mail Options")]),e._v(" -> "),t("strong",[e._v("Safe Senders")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg",alt:"Microsoft Outlook"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);