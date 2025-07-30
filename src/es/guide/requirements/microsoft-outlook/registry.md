---
title: Registro
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Registro

## Resumen

1. **Actualiza tu Registro del Windows** para cargar tu archivo local.

## Configuraciones

1. **Identifica tu versión de Microsoft Office** y corrige las entradas para que coincidan con tu versión.

   Opcionalmente, si tienes más de una versión, crea configuraciones adicionales.

2. **Crea un archivo de registro** con las nuevas configuraciones.

   Opcionalmente, cambia el camino local de la Lista de Remitentes Confiables.

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Office\16.0\Outlook\Options\Mail]
"JunkMailImportLists"=dword:00000001
"JunkMailSafeSendersFile"="d:\\SafeSenders.txt"
```

![Registro](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_02.jpg)

3. Defina esas configuraciones como estandar y aplicalas a **todos los usuarios**.

   Opcionalmente, certificate de poder actualizarlo para agregar o revocar cualquier dominio según sea necesario.
