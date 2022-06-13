---
title: Instalação Global
tags:
  - Integrações
  - Microsoft
  - Office
  - Outlook
  - 365
---
# Instalação Global

::: tip Abordagem recomendada
Abordagem recomendada para a implantação de suplementos é segmentar em fases, distribuindo inicialmente para um pequeno conjunto de membros do departamento de TI, e após avalar os resultados, continuar com outros departamentos e adoção completa para todos os usuários.
:::

## Resumo


## Configurações

1. Acessar o **Centro de Administração do Microsoft 365**.

   [Microsoft 365](https://portal.office.com/Adminportal/Home/?#/Settings/IntegratedApps)

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_01.png)

2. Ir em **Configurações** -> **Integração de Aplicativos**.

3. Em **Integração de Aplicativos**, clicar em **Subir aplicativos personalizados**.

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_02.png)


4. Em **Subir Aplicativo para distribuir**, clicar em **Prover endereço do arquivo de manifesto**, inserir a URL do **PhishX Assistant** e clicar em **Validar**.

   [PhishX Assistant](https://cdn.phishx.io/assistant/microsoft/manifest.prod.xml)

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_03.png)

   Clicar em **Próximo**.

5. Em **Adicionar Usuários**, escolher o público que receberá o aplicativo.

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_04.png)

   **Observação**: recomendamos uma implantação faseada.

   Clicar em **Próximo**.

6. Em **Aceitar permissões solicitadas**, clicar em **Próximo**.

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_05.png)

7. Em **Revisar e finalizar a implantação**, clicar em **Finalizar implantação**.

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_06.png)

8. Em **Implantação em Progresso**, esperar a implantação concluir e clicar em **Pronto**.

   **Observação**: a replicação para todos os usuários pode demorar algumas horas.

   ![Outlook Web](https://cdn.phishx.io/phishx-docs/images/assistant_microsoft_global_07.png)

9. **Notifique os usuários** que um **novo aplicativo** será disponibilizado no Microsoft Outlook.
