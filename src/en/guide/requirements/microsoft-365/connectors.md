---
title: Connectors
tags:
  - Requirements
  - Microsoft
  - Office
  - 365
---

# Connectors

## TL;DR

1. Create a New Connector in **Mail flow** -> **Connectors**. Add our current IPs list: [IPs](../ips.html#separated-by-lines)

## Settings

1. Access the preview **Microsoft 365 Exchange admin center**.

   [Exchange Admin Center](https://admin.exchange.microsoft.com/#/homepage)

2. Go to **Connectors** in menu: **Mail flow** -> **Connectors**.

   [Reference](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/use-connectors-to-configure-mail-flow/use-connectors-to-configure-mail-flow)

   Click **Add a connector**.

   ![Add a connector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_02.webp)

3. In **New Connector** -> **Connection from** select **Partner organization**.

   Click **Next**.

   ![New Connector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_03.webp)

4. In **Connector name** -> **Name** fill with "PhishX" and select **Turn it on**.

   Click **Next**.

   ![Connector name](https://cdn.phishx.io/phishx-docs/images/microsoft_365_04.webp)

5. In **Authenticating sent e-mail** select **By verifying that the IP address of the sending server matches one of the following IP addresses, which belong to your partner organization**. Add our current IPs list: [IPs](../ips.html#separated-by-lines).

   Click **Next**.

   ![Authenticating sent e-mail](https://cdn.phishx.io/phishx-docs/images/microsoft_365_05.webp)

6. In **Security restrictions** select **Reject e-mail messages if they aren't sent over TLS**.

   Click **Next**.

   ![Security restrictions](https://cdn.phishx.io/phishx-docs/images/microsoft_365_06.webp)

7. In **Review Connector**.

   Click **Create connector**.

   ![Review Connector](https://cdn.phishx.io/phishx-docs/images/microsoft_365_07.webp)

8. In **Connector created**.

   Click **Done**.

   ![Connector created](https://cdn.phishx.io/phishx-docs/images/microsoft_365_08.webp)

   ![Connector created](https://cdn.phishx.io/phishx-docs/images/microsoft_365_09.webp)
