---
title: Microsoft Sync - Powershell
tags:
  - Integrações
  - Microsoft
  - Azure
  - AD
  - 365
---

# Sincronização de Contatos da Microsoft - Powershell

::: tip Você pode fazer o download ou copiar os scripts
Para facilitar, você pode fazer o download dos scripts em [Scripts Powershell](https://cdn.phishx.io/phishx-docs/microsoft_sync.zip), ou copiar os comandos e executar através de arquivos similares dentro do seu ambiente.
:::

## Configurações

0. **Baixar os Scripts** no arquivo: [Scripts Powershell](https://cdn.phishx.io/phishx-docs/microsoft_sync.zip)

1. **Configure as suas informações** no arquivo **settings.json**.

   Altere o seu subdomínio e o seu domínio principal.

<br>

```
{
"TenantJSONFile": "tenant.json",
"APPJSONFile": "app.json",
"MAINDOMAIN": "mydomain.com",
"SECRETJSONfile": "appsecret.json",
"PhishXSubdomain": "myphishxsubdomain",
"appName": "PhishX-Contacts-Integration-PS-2026",
"appKey": "PhishX-Contacts-Integration-PS-2026",
"appHomePageUrl": "https://www.phishx.io/"
}
```

2. Abrir o **Windows Powershell** como administrador local.

   Permitir **Scripts locais na sessão**.

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_401.png)

Rodar o **Script de instalação**.

```powershell
.\install.ps1
```

OBS: A instalação de módulos locais pode demorar um tempo.

![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_402.png)

3. Conceda o **consentimento** através do link gerado.

   Acessar o link: **Admin Consent URL**

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_403.png)

   Acessar o link e clicar em **Aceitar**.

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_008.png)

4. Visualize as **configurações**.

   Acessar o link: **Admin Console URL**

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_403.png)

   ![Microsoft Sync](https://cdn.phishx.io/phishx-docs/images/microsoft_sync_102.png)
