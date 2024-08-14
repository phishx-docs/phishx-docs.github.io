(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{821:function(e,o,l){"use strict";l.r(o);var n=l(8),t=Object(n.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"powershell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" Powershell")]),e._v(" "),o("h2",{attrs:{id:"resumo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resumo"}},[e._v("#")]),e._v(" Resumo")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Atualize seu Registro do Windows")]),e._v(" via script em Powershell.")])]),e._v(" "),o("h2",{attrs:{id:"configuracoes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[e._v("#")]),e._v(" Configurações")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Identifique sua versão do Microsoft Office")]),e._v(" e corrija as entradas para corresponder à sua versão.")]),e._v(" "),o("p",[e._v("Opcionalmente, se você tiver mais de uma versão, crie configurações adicionais.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Crie um script Powershell")]),e._v(" com as novas configurações.")]),e._v(" "),o("p",[e._v("Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("# VARIABLES\n$localdir = $Env:USERPROFILE\n$localfile = \"domains.txt\"\n$localfilecomplete = \"$localdir\\$localfile\"\n$localfiletest = Test-Path -Path $localfilecomplete\n\n#### TEST\n## GET POLICY\n#Get-ExecutionPolicy -Scope LocalMachine\n## SET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine\n## UNSET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine\n####\n\n# BASE DIR\nSet-Location -Path $localdir\n# REMOVE PREVIOUS\nif ($localfiletest) {Remove-Item $localfile} else {}\nNew-Item $localfile\n# ADD CONTENT\n# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html\nSet-Content $localfile 'phishx.io'\nAdd-Content $localfile 'phishx.com'\nAdd-Content $localfile 'appstudio.shop'\nAdd-Content $localfile 'banknow.cloud'\nAdd-Content $localfile 'datagov.click'\nAdd-Content $localfile 'dealsnews.club'\nAdd-Content $localfile 'festivalnews.online'\nAdd-Content $localfile 'goonline.help'\nAdd-Content $localfile 'linkdata.live'\nAdd-Content $localfile 'mailnews.store'\nAdd-Content $localfile 'mailto.site'\nAdd-Content $localfile 'marketonline.one'\nAdd-Content $localfile 'messageapp.store'\nAdd-Content $localfile 'newstoday.click'\nAdd-Content $localfile 'peoplex.io'\nAdd-Content $localfile 'phishing.com.br'\nAdd-Content $localfile 'privacynow.click'\nAdd-Content $localfile 'professionalopportunity.store'\nAdd-Content $localfile 'securedevice.site'\nAdd-Content $localfile 'securityapp.cloud'\nAdd-Content $localfile 'sharemessages.online'\nAdd-Content $localfile 'techsol.click'\nAdd-Content $localfile 'techtips.one'\nAdd-Content $localfile 'techtips.shop'\nAdd-Content $localfile 'travelforme.cloud'\nAdd-Content $localfile 'varejoonline.club'\nAdd-Content $localfile 'viagemagora.xyz'\nAdd-Content $localfile 'webportal.one'\nAdd-Content $localfile 'appcentral.info'\nAdd-Content $localfile 'apphub.lat'\nAdd-Content $localfile 'bizconnect.click'\nAdd-Content $localfile 'cloudconnect.cfd'\nAdd-Content $localfile 'datalink.lol'\nAdd-Content $localfile 'datasync.store'\nAdd-Content $localfile 'datatips.pro'\nAdd-Content $localfile 'devicecloud.life'\nAdd-Content $localfile 'deviceguard.pro'\nAdd-Content $localfile 'infoportal.live'\nAdd-Content $localfile 'linkhub.digital'\nAdd-Content $localfile 'mailvault.site'\nAdd-Content $localfile 'messagevault.store'\nAdd-Content $localfile 'newsbyte.click'\nAdd-Content $localfile 'newsflash.click'\nAdd-Content $localfile 'newslink.digital'\nAdd-Content $localfile 'onlineguide.one'\nAdd-Content $localfile 'privacyportal.store'\nAdd-Content $localfile 'privatemessage.cloud'\nAdd-Content $localfile 'privatemessage.lat'\nAdd-Content $localfile 'professionalhub.click'\nAdd-Content $localfile 'proopportunity.one'\nAdd-Content $localfile 'quicktips.site'\nAdd-Content $localfile 'securetech.lat'\nAdd-Content $localfile 'shopsmart.bond'\nAdd-Content $localfile 'smartdevice.live'\nAdd-Content $localfile 'technews.rest'\nAdd-Content $localfile 'techwave.pics'\nAdd-Content $localfile 'traveltips.quest'\nAdd-Content $localfile 'trendalert.store'\n\n### REGISTRY\n## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa\n# create path\nNew-Item 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\nNew-Item 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\n# junkmailimportlists\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\n# junkmailsafesendersfile\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\n\n# STOP OUTLOOK\nStop-Process -Name \"OUTLOOK\" -Force -ErrorAction SilentlyContinue\n# START OUTLOOK\nStart-Process -FilePath \"$Env:PROGRAMFILES\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE\" -ErrorAction SilentlyContinue\n\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[o("strong",[e._v("Distribua o script")]),e._v(" e execute uma vez para "),o("strong",[e._v("todos os usuários")]),e._v(".")])])])}),[],!1,null,null,null);o.default=t.exports}}]);