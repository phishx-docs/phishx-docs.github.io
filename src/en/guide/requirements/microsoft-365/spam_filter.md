---
title: Spam filter
tags:
  - Requirements
  - Microsoft
  - Office
  - 365
---

# Spam filter

## TL;DR

1. Create a new Spam Filter in **protection** -> **spam filter**. Add our current domains list: [Domains](../domains.html#separated-by-semi-colons)

## Settings

1. Access the current **Microsoft 365 Exchange admin center**.

   [Exchange Admin Center](https://outlook.office365.com/ecp/)

   ![Exchange Admin Center](https://cdn.phishx.io/phishx-docs/images/microsoft_365_10.webp)

2. Go to **spam filter** in menu: **protection** -> **spam filter**.

   Add a new one. Click **+**.

   [Reference](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-your-spam-filter-policies)

   ![New Connector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_11.webp)

3. In **new spam filter policy** -> **\*Name** fill with "PhishX".

   ![Name](https://cdn.phishx.io/phishx-docs/images/microsoft_365_12.webp)

4. In **new spam filter policy** -> **Domains allow list** -> **Always deliver e-mail from the following domains to the inbox**.

   Click **+**.

5. In **add allowed domain** add our current domains list: [Domains](../domains.html#separated-by-semi-colons).

   Click **Ok**.

   ::: tip Tip
   Remove any extra spaces after paste.
   :::

   ![add allowed domain](https://cdn.phishx.io/phishx-docs/images/microsoft_365_13.webp)

   ![add allowed domain](https://cdn.phishx.io/phishx-docs/images/microsoft_365_14.webp)

6. In **new spam filter policy** -> **Applied To** select **The recipient domain is** and add your own domains.

   Click **Ok**.

   ![Applied To](https://cdn.phishx.io/phishx-docs/images/microsoft_365_15.webp)

   ![Applied To](https://cdn.phishx.io/phishx-docs/images/microsoft_365_16.webp)

7. Click **Save**.

   ![Update complete](https://cdn.phishx.io/phishx-docs/images/microsoft_365_17.webp)

   ![Information](https://cdn.phishx.io/phishx-docs/images/microsoft_365_18.webp)

   ![Connector created](https://cdn.phishx.io/phishx-docs/images/microsoft_365_19.webp)

   ![spam filter](https://cdn.phishx.io/phishx-docs/images/microsoft_365_20.webp)
