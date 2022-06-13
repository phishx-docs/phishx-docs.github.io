(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{746:function(e,o,n){"use strict";n.r(o);var t=n(24),l=Object(t.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"powershell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" Powershell")]),e._v(" "),n("h2",{attrs:{id:"resumen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resumen"}},[e._v("#")]),e._v(" Resumen")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("Actualice su registro de Windows")]),e._v(" mediante el script de Powershell.")])]),e._v(" "),n("h2",{attrs:{id:"ajustes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ajustes"}},[e._v("#")]),e._v(" Ajustes")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("Identifique su versión de Microsoft Office")]),e._v(" y corrija las entradas para que coincidan con su versión.")]),e._v(" "),n("p",[e._v("Opcionalmente, si tiene más de una versión, cree configuraciones adicionales.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Cree un script de Powershell")]),e._v(" con la nueva configuración.")]),e._v(" "),n("p",[e._v("Opcionalmente, agregue otros dominios internos y de terceros en los que confiar a través de la Lista de remitentes seguros.")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# VARIABLES\n$localdir = $Env:USERPROFILE\n$localfile = \"domains.txt\"\n$localfilecomplete = \"$localdir\\$localfile\"\n$localfiletest = Test-Path -Path $localfilecomplete\n\n#### TEST\n## GET POLICY\n#Get-ExecutionPolicy -Scope LocalMachine\n## SET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine\n## UNSET POLICY\n#Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine\n####\n\n# BASE DIR\nSet-Location -Path $localdir\n# REMOVE PREVIOUS\nif ($localfiletest) {Remove-Item $localfile} else {}\nNew-Item $localfile\n# ADD CONTENT\n# ADJUST DOMAINS IN: https://docs.phishx.io/pt/guide/requirements/domains.html\nSet-Content $localfile 'phishx.io'\nAdd-Content $localfile 'phishx.com'\nAdd-Content $localfile 'anbiental.com'\nAdd-Content $localfile 'appnews.cloud'\nAdd-Content $localfile 'appto.click'\nAdd-Content $localfile 'bankto.me'\nAdd-Content $localfile 'datagov.online'\nAdd-Content $localfile 'dealsnow.space'\nAdd-Content $localfile 'festivalnews.online'\nAdd-Content $localfile 'goonline.quest'\nAdd-Content $localfile 'govonline.click'\nAdd-Content $localfile 'linknew.live'\nAdd-Content $localfile 'mailnews.store'\nAdd-Content $localfile 'mailto.website'\nAdd-Content $localfile 'marketonline.one'\nAdd-Content $localfile 'messageapp.store'\nAdd-Content $localfile 'moneyme.site'\nAdd-Content $localfile 'newstoday.click'\nAdd-Content $localfile 'phishing.com.br'\nAdd-Content $localfile 'portalnoticias.cloud'\nAdd-Content $localfile 'privacydata.online'\nAdd-Content $localfile 'professionalcareer.one'\nAdd-Content $localfile 'salesstudio.live'\nAdd-Content $localfile 'securedevice.site'\nAdd-Content $localfile 'securityapp.cloud'\nAdd-Content $localfile 'sharesocial.online'\nAdd-Content $localfile 'socialtoday.xyz'\nAdd-Content $localfile 'techsol.click'\nAdd-Content $localfile 'techtips.one'\nAdd-Content $localfile 'travelforme.cloud'\nAdd-Content $localfile 'utilitiesonline.site'\nAdd-Content $localfile 'varejoonline.club'\nAdd-Content $localfile 'viagemagora.club'\nAdd-Content $localfile 'webportal.one'\n\n### REGISTRY\n## https://support.microsoft.com/en-us/topic/how-to-deploy-junk-email-settings-such-as-the-safe-senders-list-by-using-group-policy-d17e49fb-af72-c796-6295-4da6d89ef5fa\n# create path\nNew-Item 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\nNew-Item 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Force\n# junkmailimportlists\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailimportlists' -PropertyType 'DWord' -Value 1 -Force\n# junkmailsafesendersfile\nNew-ItemProperty 'HKCU:\\Software\\Policies\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\nNew-ItemProperty 'HKCU:\\Software\\Microsoft\\office\\16.0\\outlook\\options\\mail' -Name 'junkmailsafesendersfile' -PropertyType 'String' -Value $localfilecomplete -Force\n\n# STOP OUTLOOK\nStop-Process -Name \"OUTLOOK\" -Force -ErrorAction SilentlyContinue\n# START OUTLOOK\nStart-Process -FilePath \"$Env:PROGRAMFILES\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE\" -ErrorAction SilentlyContinue\n\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("strong",[e._v("Distribuya el script")]),e._v(" y ejecútelo una vez para "),n("strong",[e._v("todos los usuarios")]),e._v(".")])])])}),[],!1,null,null,null);o.default=l.exports}}]);