(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{546:function(e,o,t){"use strict";t.r(o);var n=t(23),l=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" Powershell")]),e._v(" "),t("h2",{attrs:{id:"tl-dr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[e._v("#")]),e._v(" TL;DR")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Update your Windows Registry")]),e._v(" via Powershell script.")])]),e._v(" "),t("h2",{attrs:{id:"settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Identify your version of Microsoft Office")]),e._v(" and correct entries to match your version.")]),e._v(" "),t("p",[e._v("Optionally, if you have more than one version, create additional configurations.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Create a Powershell script")]),e._v(" with the new settings.")]),e._v(" "),t("p",[e._v("Optionally add other internal and third-party domains to be trusted via the Safe Senders List.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# VARIABLES\n$localdir = $Env:USERPROFILE\n$localfile = \"domains.txt\"\n$localfilecomplete = \"$localdir\\$localfile\"\n$localfiletest = Test-Path -Path $localfilecomplete\n\n#### TEST\n## GET POLICY\n#Get-ExecutionPolicy -Scope LocalMachine\n## SET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine\n## UNSET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine\n####\n\n# BASE DIR\nSet-Location -Path $localdir\n# REMOVE PREVIOUS\nif ($localfiletest) {Remove-Item $localfile} else {}\nNew-Item $localfile\n# ADD CONTENT\n# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html\nSet-Content $localfile 'phishx.io'\nAdd-Content $localfile 'phishx.com'\nAdd-Content $localfile 'anbiental.com'\nAdd-Content $localfile 'appnews.cloud'\nAdd-Content $localfile 'appto.click'\nAdd-Content $localfile 'bankto.me'\nAdd-Content $localfile 'datagov.online'\nAdd-Content $localfile 'dealsnow.space'\nAdd-Content $localfile 'festivalnews.online'\nAdd-Content $localfile 'goonline.quest'\nAdd-Content $localfile 'govonline.click'\nAdd-Content $localfile 'linknew.live'\nAdd-Content $localfile 'mailnews.store'\nAdd-Content $localfile 'mailto.website'\nAdd-Content $localfile 'marketonline.one'\nAdd-Content $localfile 'messageapp.store'\nAdd-Content $localfile 'moneyme.site'\nAdd-Content $localfile 'newstoday.click'\nAdd-Content $localfile 'phishing.com.br'\nAdd-Content $localfile 'portalnoticias.cloud'\nAdd-Content $localfile 'privacydata.online'\nAdd-Content $localfile 'professionalcareer.one'\nAdd-Content $localfile 'salesstudio.live'\nAdd-Content $localfile 'securedevice.site'\nAdd-Content $localfile 'securityapp.cloud'\nAdd-Content $localfile 'sharesocial.online'\nAdd-Content $localfile 'socialtoday.xyz'\nAdd-Content $localfile 'techsol.click'\nAdd-Content $localfile 'techtips.one'\nAdd-Content $localfile 'travelforme.cloud'\nAdd-Content $localfile 'utilitiesonline.site'\nAdd-Content $localfile 'varejoonline.club'\nAdd-Content $localfile 'viagemagora.club'\nAdd-Content $localfile 'webportal.one'\n\n### REGISTRY\n## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa\n# create path\nNew-Item 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\nNew-Item 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\n# junkmailimportlists\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\n# junkmailsafesendersfile\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\n\n# STOP OUTLOOK\nStop-Process -Name \"OUTLOOK\" -Force -ErrorAction SilentlyContinue\n# START OUTLOOK\nStart-Process -FilePath \"$Env:PROGRAMFILES\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE\" -ErrorAction SilentlyContinue\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Distribute the script")]),e._v(" and run it once for "),t("strong",[e._v("all users")]),e._v(".")])])])}),[],!1,null,null,null);o.default=l.exports}}]);