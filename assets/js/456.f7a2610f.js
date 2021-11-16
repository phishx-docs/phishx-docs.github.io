(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{845:function(e,o,t){"use strict";t.r(o);var n=t(21),l=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" Powershell")]),e._v(" "),t("h2",{attrs:{id:"resumo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resumo"}},[e._v("#")]),e._v(" Resumo")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Atualize seu Registro do Windows")]),e._v(" via script em Powershell.")])]),e._v(" "),t("h2",{attrs:{id:"configuracoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes"}},[e._v("#")]),e._v(" Configurações")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Identifique sua versão do Microsoft Office")]),e._v(" e corrija as entradas para corresponder à sua versão.")]),e._v(" "),t("p",[e._v("Opcionalmente, se você tiver mais de uma versão, crie configurações adicionais.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Crie um script Powershell")]),e._v(" com as novas configurações.")]),e._v(" "),t("p",[e._v("Opcionalmente, adicione outros domínios internos e de terceiros para serem confiados via Lista de Remetentes Confiáveis.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# VARIABLES\n$localdir = $Env:USERPROFILE\n$localfile = \"domains.txt\"\n$localfilecomplete = \"$localdir\\$localfile\"\n$localfiletest = Test-Path -Path $localfilecomplete\n\n#### TEST\n## GET POLICY\n#Get-ExecutionPolicy -Scope LocalMachine\n## SET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine\n## UNSET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine\n####\n\n# BASE DIR\nSet-Location -Path $localdir\n# REMOVE PREVIOUS\nif ($localfiletest) {Remove-Item $localfile} else {}\nNew-Item $localfile\n# ADD CONTENT\n# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html\nSet-Content $localfile '@phishx.io'\nAdd-Content $localfile '@phishing.com.br'\nAdd-Content $localfile '@guidesonline.xyz'\nAdd-Content $localfile '@meetingsonline.xyz'\nAdd-Content $localfile '@varejoonline.club'\nAdd-Content $localfile '@socialtoday.xyz'\nAdd-Content $localfile '@appnews.cloud'\nAdd-Content $localfile '@bankmy.club'\nAdd-Content $localfile '@dealsnow.space'\nAdd-Content $localfile '@newsme.store'\nAdd-Content $localfile '@govonline.xyz'\nAdd-Content $localfile '@portalnoticias.cloud'\nAdd-Content $localfile '@guidesonline.space'\nAdd-Content $localfile '@messageapp.store'\nAdd-Content $localfile '@professionalme.site'\nAdd-Content $localfile '@securedevice.site'\nAdd-Content $localfile '@moneyme.cloud'\nAdd-Content $localfile '@viagemagora.club'\nAdd-Content $localfile '@techeasy.space'\nAdd-Content $localfile '@mailnews.store'\nAdd-Content $localfile '@sharesocial.online'\nAdd-Content $localfile '@travelforme.online'\n\n### REGISTRY\n## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa\n# create path\nNew-Item 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\nNew-Item 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\n# junkmailimportlists\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\n# junkmailsafesendersfile\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\n\n# STOP OUTLOOK\nStop-Process -Name \"OUTLOOK\" -Force -ErrorAction SilentlyContinue\n# START OUTLOOK\nStart-Process -FilePath \"$Env:PROGRAMFILES\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE\" -ErrorAction SilentlyContinue\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Distribua o script")]),e._v(" e execute uma vez para "),t("strong",[e._v("todos os usuários")]),e._v(".")])])])}),[],!1,null,null,null);o.default=l.exports}}]);