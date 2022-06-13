---
title: Registro de aplicaciones
tags:
  # - Integraciones
  - Microsoft
  - Azure
  - AD
---
# Registro de Aplicaciones

## Resumen

1. Crear un nuevo Registro de Aplicaciones. [Registro de Aplicaciones](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

2. Copiar tus **arrendatario**, **id del cliente** y **secreto del cliente**.

## Configuraciones

1. Acceder **Registro de Aplicaciones**.

   [Registro de Aplicaciones](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

   ![Registro de Aplicaciones](https://cdn.phishx.io/phishx-docs/images/azure_ad_03.webp)

2. Hacer clic en **Nuevo Registro**.

3. En **Registrar una aplicación**:

   En **Nombre** insertar **PhishX**.

   En **Tipos de cuenta con soporte** seleccionar **Cuentas solamente en este directorio organizacional (... solamente - arrendatario único)**.

   En **URI de redirección (opcional)** insertar tu **URL de PhishX**: **https://mi_subdominio.phishx.io/azuread**.

   Hacer clic en **Registrar**.

   ![Nuevo Registro](https://cdn.phishx.io/phishx-docs/images/azure_ad_04.webp)

4. Editar tu **Aplicação PhishX**.

   ![Aplicación PhishX](https://cdn.phishx.io/phishx-docs/images/azure_ad_05.webp)

5. En **Visión general**:

   Copia tu **ID de la aplicación (cliente)**.

   Copia tu **ID del diretório (arrendatario)**.

   ![Visión general](https://cdn.phishx.io/phishx-docs/images/azure_ad_06.webp)

6. En **Marca**:

   En **Nombre** insertar **PhishX**.

   En **URL de la Página inicial** insertar **https://www.phishx.io/**.

   En **URL de los términos de servicio** insertar **https://terms.phishx.io/**.

   En **URL de la declaración de privacidad** insertar **https://terms.phishx.io/**.

   Hacer clic en **Salvar**.

   ![Marca](https://cdn.phishx.io/phishx-docs/images/azure_ad_07.webp)

7. En **Autenticación**:

   En **URL de logout** insertar tu **URL de PhishX**: **https://mi_subdominio.phishx.io/azuread**.

   En **Concesión implícita** seleccionar **tokens de ID**.

   Hacer clic en **Salvar**.

   ![Autenticación](https://cdn.phishx.io/phishx-docs/images/azure_ad_08.webp)

8. En **Certificados y Secretos**:

   Hacer clic en **Nuevo secreto del cliente**.

   ![Certificados y Secretos](https://cdn.phishx.io/phishx-docs/images/azure_ad_09.webp)

   En **Descripción** insertar **PhishX**.

   En**Expira** seleccionar **En 1 año**.

   Hacer clic en **Agregar**.

   ![Certificados y Secretos](https://cdn.phishx.io/phishx-docs/images/azure_ad_10.webp)

   Copiar tu **Secreto del Cliente**.

   ![Certificados y Secretos](https://cdn.phishx.io/phishx-docs/images/azure_ad_11.webp)

9. En **Configuración de Token**:

   Hacer clic en **Agregar reivindicación opcional**.

   ![Configuración de Token](https://cdn.phishx.io/phishx-docs/images/azure_ad_12.webp)

   En **Tipo del token** seleccionar **ID**.

   En **Reivindicación** seleccionar **correo electrónico**, **given_name**, **family_name**, **sid** y **upn**.

   Hacer clic en **Agregar**.

   ![Configuración de Token](https://cdn.phishx.io/phishx-docs/images/azure_ad_13.webp)