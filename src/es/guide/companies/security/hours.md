---
title: Control de acceso por horario
tags:
  - Empresas
  - Configuraciones
---

# Control de acceso por horario

::: tip Múltiples huso horarios
Cada país o región tiene diferentes husos horarios.<br>
Recomendamos habilitar las horas globales basadas ​​en la más baja y más alta hora dentro de tu región para soportar a todos tus usuarios.<br>
Si necesitas ayuda adicional, habla con [Customer Success](mailto:cs@phishx.io).
:::

Gestionar la disponibilidad de acceso a los contenidos y portales de conocimiento de PhishX basado en el horario de acceso.

1. En **Seguridad** -> **Control de acceso por Horario**.

   En **Habilitado** definir si el módulo estará habilitado.

   En **Global** definir si solamente la configuración globa estará activa.

   En **Días** definir los días específicos.

   En **Horas** definir las horas específicas. Las horas globales se basan en el horario global **UTC**.

   ![Control de acceso por horario](https://cdn.phishx.io/phishx-docs/images/phishx_companies_hours_01.webp)

2. Opcionalmente agregar configuraciones específicas por huso horario.

   Agregar un nuevo. Hacer clic **+**.

   En **Huso Horario** definir el nuevo huso horario.

   En **Días** definir los días específicos.

   n **Horas** definir las horas específicas. Las horas del huso horario se basan en el horario del **huso horario**.

   ::: details Control por huso horario
   Si la opción de habilitada global no está marcada, si hay una política específica para el huso horario, esa sobrescribe la política global.<br>
   El huso horario poderá ser identificado por el acceso público del usuario (IP de origen), cuando esté disponible.
   :::
