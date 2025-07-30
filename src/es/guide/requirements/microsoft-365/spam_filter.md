---
title: Filtro de spam
tags:
  - Requisitos
  - Microsoft
  - Office
  - 365
---

# Filtro de spam

## Resumen

1. Crear un nuevo Filtro de Spam en **proteccion** -> **filtro de spam**. Agregar nuestra lista actual de dominios: [Dominios](../domains.html#separado-por-ponto-e-virgulas)

## Configuraciones

1. Acceder al actual **Microsoft 365 Exchange admin center**.

   [Exchange Admin Center](https://outlook.office365.com/ecp/)

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_365_10.webp)

2. Ir para **filtro de spam** en el menú: **proteccion** -> **filtro de spam**.

   Agregar un nuevo. Hacer clic en **+**.

   [Referencia](https://docs.microsoft.com/pt-br/microsoft-365/security/office-365-security/configure-your-spam-filter-policies)

   ![Nuevo Conector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_11.webp)

3. En **nueva política de filtro de spam** -> **\*Nombre** insertar "PhishX".

   ![Nombre](https://cdn.phishx.io/phishx-docs/images/microsoft_365_12.webp)

4. En **nueva política de filtro de spam** -> **Lista de permiso de dominios** -> **siempre entrega correos electrónicos de los siguientes dominios a la bandeja de entrada**.

   Hacer clic en **+**.

5. En **agregar dominio permitido** agregar nuestra lista actual de dominios: [Dominios](../domains.html#separado-por-ponto-e-virgulas).

   Hacer clic en **Ok**.

   ::: tip Pista
   Eliminar todos los espacios extras después de pegar.
   :::

   ![agregar dominio permitido](https://cdn.phishx.io/phishx-docs/images/microsoft_365_13.webp)

   ![agregar dominio permitido](https://cdn.phishx.io/phishx-docs/images/microsoft_365_14.webp)

6. En **nueva política de filtro de spam** -> **Aplicar para** seleccionar **El dominio do destinatario es** y agregar tus propios dominios.

   Hacer clic en **Ok**.

   ![Aplicar para](https://cdn.phishx.io/phishx-docs/images/microsoft_365_15.webp)

   ![Aplicar para](https://cdn.phishx.io/phishx-docs/images/microsoft_365_16.webp)

7. Hacer clic en **Salvar**.

   ![Actualización completa](https://cdn.phishx.io/phishx-docs/images/microsoft_365_17.webp)

   ![Información](https://cdn.phishx.io/phishx-docs/images/microsoft_365_18.webp)

   ![Conector creado](https://cdn.phishx.io/phishx-docs/images/microsoft_365_19.webp)

   ![filtro de spam](https://cdn.phishx.io/phishx-docs/images/microsoft_365_20.webp)
