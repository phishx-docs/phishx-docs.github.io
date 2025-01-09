(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{444:function(e,t,l){"use strict";l.r(t);var o=l(8),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" Powershell")]),e._v(" "),t("h2",{attrs:{id:"tl-dr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[e._v("#")]),e._v(" TL;DR")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Update your Windows Registry")]),e._v(" via Powershell script.")])]),e._v(" "),t("h2",{attrs:{id:"settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Identify your version of Microsoft Office")]),e._v(" and correct entries to match your version.")]),e._v(" "),t("p",[e._v("Optionally, if you have more than one version, create additional configurations.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Create a Powershell script")]),e._v(" with the new settings.")]),e._v(" "),t("p",[e._v("Optionally add other internal and third-party domains to be trusted via the Safe Senders List.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# VARIABLES\n$localdir = $Env:USERPROFILE\n$localfile = \"domains.txt\"\n$localfilecomplete = \"$localdir\\$localfile\"\n$localfiletest = Test-Path -Path $localfilecomplete\n\n#### TEST\n## GET POLICY\n#Get-ExecutionPolicy -Scope LocalMachine\n## SET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine\n## UNSET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine\n####\n\n# BASE DIR\nSet-Location -Path $localdir\n# REMOVE PREVIOUS\nif ($localfiletest) {Remove-Item $localfile} else {}\nNew-Item $localfile\n# ADD CONTENT\n# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html\nSet-Content $localfile 'phishx.io'\nAdd-Content $localfile 'phishx.com'\nAdd-Content $localfile 'appstudio.shop'\nAdd-Content $localfile 'banknow.cloud'\nAdd-Content $localfile 'datagov.click'\nAdd-Content $localfile 'dealsnews.club'\nAdd-Content $localfile 'festivalnews.online'\nAdd-Content $localfile 'goonline.help'\nAdd-Content $localfile 'linkdata.live'\nAdd-Content $localfile 'mailnews.store'\nAdd-Content $localfile 'mailto.site'\nAdd-Content $localfile 'marketonline.one'\nAdd-Content $localfile 'messageapp.store'\nAdd-Content $localfile 'newstoday.click'\nAdd-Content $localfile 'peoplex.io'\nAdd-Content $localfile 'phishing.com.br'\nAdd-Content $localfile 'privacynow.click'\nAdd-Content $localfile 'professionalopportunity.store'\nAdd-Content $localfile 'securedevice.site'\nAdd-Content $localfile 'securityapp.cloud'\nAdd-Content $localfile 'sharemessages.online'\nAdd-Content $localfile 'techsol.click'\nAdd-Content $localfile 'techtips.one'\nAdd-Content $localfile 'techtips.shop'\nAdd-Content $localfile 'travelforme.cloud'\nAdd-Content $localfile 'varejoonline.club'\nAdd-Content $localfile 'viagemagora.xyz'\nAdd-Content $localfile 'webportal.one'\nAdd-Content $localfile 'appcentral.info'\nAdd-Content $localfile 'apphub.lat'\nAdd-Content $localfile 'bizconnect.click'\nAdd-Content $localfile 'cloudconnect.cfd'\nAdd-Content $localfile 'datalink.lol'\nAdd-Content $localfile 'datasync.store'\nAdd-Content $localfile 'datatips.pro'\nAdd-Content $localfile 'devicecloud.life'\nAdd-Content $localfile 'deviceguard.pro'\nAdd-Content $localfile 'infoportal.live'\nAdd-Content $localfile 'linkhub.digital'\nAdd-Content $localfile 'mailvault.site'\nAdd-Content $localfile 'messagevault.store'\nAdd-Content $localfile 'newsbyte.click'\nAdd-Content $localfile 'newsflash.click'\nAdd-Content $localfile 'newslink.digital'\nAdd-Content $localfile 'onlineguide.one'\nAdd-Content $localfile 'privacyportal.store'\nAdd-Content $localfile 'privatemessage.cloud'\nAdd-Content $localfile 'privatemessage.lat'\nAdd-Content $localfile 'professionalhub.click'\nAdd-Content $localfile 'proopportunity.one'\nAdd-Content $localfile 'quicktips.site'\nAdd-Content $localfile 'securetech.lat'\nAdd-Content $localfile 'shopsmart.bond'\nAdd-Content $localfile 'smartdevice.live'\nAdd-Content $localfile 'technews.rest'\nAdd-Content $localfile 'techwave.pics'\nAdd-Content $localfile 'traveltips.quest'\nAdd-Content $localfile 'trendalert.store'\nAdd-Content $localfile 'businessuniversity.tech'\nAdd-Content $localfile 'trainingportal.me'\nAdd-Content $localfile 'cloudacademy.live'\nAdd-Content $localfile 'microlearning.academy'\nAdd-Content $localfile 'digitaleducation.digital'\n\n### REGISTRY\n## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa\n# create path\nNew-Item 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\nNew-Item 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\n# junkmailimportlists\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\n# junkmailsafesendersfile\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\n\n# STOP OUTLOOK\nStop-Process -Name \"OUTLOOK\" -Force -ErrorAction SilentlyContinue\n# START OUTLOOK\nStart-Process -FilePath \"$Env:PROGRAMFILES\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE\" -ErrorAction SilentlyContinue\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Distribute the script")]),e._v(" and run it once for "),t("strong",[e._v("all users")]),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);