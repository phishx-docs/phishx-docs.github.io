---
lastUpdated: false
---

# Política de IA

## 1. Visión General y Compromiso

PhishX adopta un enfoque de **Seguridad y Privacidad desde el Diseño** (_Security & Privacy by Design_) en el desarrollo y despliegue de funciones de Inteligencia Artificial Generativa (IAGEN) dentro de su plataforma SaaS.

Esta política establece las directrices de gobernanza, protección de datos, limitaciones de uso y transparencia sobre cómo se utiliza la IA en la plataforma, garantizando la integridad de los datos de las organizaciones clientes y el estricto cumplimiento de los estándares globales de seguridad y conformidad.

## 2. Proveedores de IA de Terceros y Modelos

PhishX se integra con proveedores globales de IA consolidados y auditados a través de APIs seguras, específicamente:

- **OpenAI:** Modelos avanzados de la serie GPT (por ejemplo, GPT-5) y Whisper para el procesamiento, transcripción y generación de lenguaje natural.

- **Microsoft / Azure OpenAI Services:** Modelos alojados a nivel empresarial que operan bajo garantías contractuales de gobernanza e aislamiento de datos.

## 3. Cumplimiento Explicito con Políticas de API de Terceros

### Requisitos de Uso Limitado de Google (_Google Limited Use_)

En pleno cumplimiento con la **Google API Services User Data Policy** (incluidos los requisitos de _Limited Use_ para servicios de IA de terceros), PhishX declara públicamente el siguiente compromiso:

> **Declaración de Conformidad de Datos:**
> _"The use and transfer of raw or derived user data received from Google Workspace APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements."_

## 4. Protección de Datos Organizacionales y Garantías de No Entrenamiento

PhishX garantiza un estricto aislamiento de los datos y protección contra usos no autorizados para toda la información procesada por las funciones de IA:

1. **Sin Entrenamiento de Modelos:** Ningún dato sin procesar, contexto institucional, dato personal, resultado de campañas, simulación o metadato proveniente de las organizaciones clientes se utiliza jamás para entrenar, reentrenar o ajustar (_fine-tune_) modelos de IA públicos o privados proporcionados por terceros (OpenAI, Microsoft u otros).

2. **Sin Reutilización para Inferencia de Terceros:** Los datos suministrados en las solicitudes de IA se procesan de forma efímera y exclusiva para responder a la solicitud inmediata, sin compartirse nunca con otros clientes ni ser accesibles para ellos.

3. **Transmisión Cifrada y Efímera:** Todas las llamadas API a los proveedores de IA están cifradas en tránsito (TLS) y se gestionan sin retención persistente de datos por parte de los proveedores socios.

## 5. Arquitectura de Prompts y Mitigación de Riesgos

Para proteger la plataforma y a sus usuarios contra vulnerabilidades conocidas de IA (como _Prompt Injection_, _Data Poisoning_, _Jailbreak_ y _Exfiltration_), PhishX implementa:

- **Prompts Cerrados y Controlados:** Los usuarios finales y administradores no tienen acceso a interfaces de chat abierto. Todos los _prompts_ están codificados en el _backend_, predefinidos y restringidos estrictamente al alcance operativo de la función específica.

- **Sanitización de Entradas y Salidas:** Todo el contenido enviado y las respuestas generadas se filtran y sanitizan para garantizar que solo se devuelva el contenido necesario, evitando la fuga de instrucciones del sistema (_system prompts_) o la exposición no deseada de datos.

- **Gestión Segura de Credenciales:** Las claves de acceso (API Keys) para los proveedores de IA se almacenan en cofres de secretos cifrados dentro de la infraestructura de PhishX bajo un estricto Control de Acceso Basado en Roles (RBAC), y nunca se exponen al cliente ni al navegador.

## 6. Control del Cliente y Uso Opcional

- **Activación Opcional:** El uso de cualquier funcionalidad de IA Generativa dentro de la plataforma PhishX es **totalmente opcional**.

- **Desactivación Global:** Las organizaciones clientes mantienen total autonomía para desactivar todas las funciones de IA en su entorno (_tenant_) a través de las configuraciones de gobernanza de la plataforma.

## 7. Casos de Uso Autorizados de IA

La IA Generativa dentro de PhishX se limita a la optimización de flujos de trabajo y a la creación de contenido educativo:

- **Creación y Enriquecimiento de Contenido:** Generación automatizada de cuestionarios de concientización basados en temas específicos o materiales de referencia externos (por ejemplo, publicaciones de blog públicas o archivos PDF).

- **Accesibilidad y Localización:** Traducción de módulos de capacitación, subtitulado automático de videos y localización de mensajes en múltiples idiomas.

- **Optimización Textual:** Corrección ortográfica, resumen de textos y sugerencias de temas para campañas.

## 8. Gestión de Cambios, Hoja de Ruta y Transparencia

PhishX mantiene un proceso continuo para la gestión de actualizaciones y la comunicación sobre las capacidades de IA:

- **Notificaciones Anticipadas:** Las actualizaciones que introduzcan nuevas funciones o cambios en las capacidades de IA se comunican con anticipación a través de notas de lanzamiento (_release notes_) y comunicados oficiales.

- **Evaluación de Riesgos:** Cualquier cambio estructural o de integración que involucre IA se somete a una evaluación previa de impacto en la privacidad y la seguridad.

## 9. Contacto y Gobernanza de Privacidad

Si tiene preguntas, solicitudes o desea obtener más información sobre la gobernanza de IA y la privacidad de datos en PhishX, comuníquese con nuestro Oficial de Protección de Datos (DPO) a través de los canales oficiales de soporte de la plataforma.
