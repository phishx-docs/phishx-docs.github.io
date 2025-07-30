---
layout: TableLayout-2-25_75
title: Política de Grupo
tags:
  - Requisitos
  - Microsoft
  - Office
  - Outlook
  - 365
---

# Política de Grupo

## Resumen

1. **Configurar** e **implementar** una nueva política del Outlook.

## Configuraciones

1. **Abra** tu **Política de Grupo**.

2. **Importar** modelo del Outlook.

   Elige el alcance del usuario.

   ![Microsoft Outlook](https://cdn.phishx.io/phishx-docs/images/phishx_settings_docs_gpo_safe_senders_list_01.jpg)

3. **Configura** tu nueva política del Outlook..

| Política                                                                                                                            | Configuraciones                                                                                                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reemplazar o adjuntar la lista de importación de bsura electronica                                                                  | Categoria: Basura electronica<br>Camino: Microsoft Outlook 2016\Outlook Options\Preferencias\Basura electronica<br>Configuraciones: no configuradas (Estandar es adjuntar)       |
| Especifica la ruta a la lista de Remitentes Confiables                                                                              | Categoria: Basura electronica<br>Camino: Microsoft Outlook 2016\Outlook Options\Preferencias\Basura electronica<br>Configuraciones: Habilitado (Tu Camino local)                 |
| Activador para aplicar la configuración de la lista de correo no deseado                                                            | Categoria: Basura electronica<br>Camino: Microsoft Outlook 2016\Outlook Options\Preferencias\Basura electronica<br>Configuraciones: Habilitado                                   |
| Bajar automaticamente contenido para correo electrónico de personas en la categoría Listas de remitentes y destinatarios confiables | Categoria: Automatic Picture Download Configuraciones<br>Camino: Microsoft Outlook 2016\Seguridad\Configuraciones de download automático de imaje<br>Configuraciones: Habilitado |

<br>

4. **Prueba** tu política y **distribuya** en tu entorno.
