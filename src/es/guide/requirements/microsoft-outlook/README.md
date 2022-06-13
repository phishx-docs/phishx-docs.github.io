---
layout: TableLayout-2-25_75
title: Microsoft Outlook
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---
# Microsoft Outlook

::: tip Mensajes en tu bandeja de entrada
Direcciones de correo electrónico y nombres de dominio de la Lista de Remitentes Confiables nunca se tratan como basura electrónica, independientemente del contenido del mensaje. Puedes agregar tus contactos y otros correspondientes a la lista de Remitentes Confiables para confirmar que siempre recibirá sus mensajes en su bandeja de entrada.
:::

::: tip Descarga imágenes y contenido automáticamente
De forma predeterminada, Outlook no descarga automáticamente imágenes o otro contenido, excepto cuando el contenido externo proviene de un sitio web en la zona de Sitios Confiables o de una dirección o dominio especificado en la Lista de Remitentes Confiables.
:::


## Resumen

1. Agraga nuestros dominios a tu **Lista de Remitentes Confiables**. [Dominios](../domains.html#lista-de-remetentes-confiaveis)

2. Agraga cualquier dominio interno extra a tu **Lista de Remitentes Confiables**.

## Configuraciones

1. **Habla con tu equipo interno** y **elige la mejor manera** de configurar tu **Lista de Remitentes Confiables**.

   [Archivos de Modelo Administrativo](https://www.microsoft.com/en-us/download/details.aspx?id=49030)

   [Office Herramienta de Personalización](https://docs.microsoft.com/pt-br/deployoffice/oct/oct-2016-help-overview)

| Método | Descripción |
| :--- | :--- |
| [Personal](personal/) | Cada persona tiene que confiar en el remitente y / o el dominio individualmente. |
| [Lista](list/) | Necesitas proporcionar una lista actualizada. |
| [Registro](registry/) | Necesitas cambiar algunas configuraciones en el Registro del Windows. |
| [Powershell](powershell/) | Cambia dinámicamente algunas configuraciones en el Registro de Windows a través de Powershell. |
| Script de Logon | Crea una forma automatizada de actualizar un archivo local y cambia el registro en cada logon. |
| [Política de Grupo](gpo/) | Usa un modelo administrativo oficial para implementar. |
| [Exchange Online Protection](eop/) | Utilice Exchange Online Protection para implementar. |
<br>

2. **Verifia tu lista actual** de **Remitentes Confiables** en Microsoft Outlook.

   Acceder **Inicio** -> **Basura Electrónica** -> **Opciones de Basura Electrónica** -> **Remitentes Confiabless**.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_safe_senders_list_03.jpg)
